import Sequelize from 'sequelize';
import { createLogger, format, transports } from 'winston';
import { Vimeo } from 'vimeo';
import { signToken } from '../helpers/tokenization/tokenize';
import { User } from '../../database/models';
import { sendVerificationMail } from '../helpers/mailer/mailer';
import { confirmUploadStatus, getVideoUrl } from '../helpers/vimeoHelpers';

const client = new Vimeo(
  '7a9a547d9bc0c012bc7e854c65702af4c60f2757',
  'TX1oENQ9ZtUWSXrsoieGXiV1Y15uJVuPzAf4OaFzKaeLZgOK9U0L4PfjuFVmIsHDdSZrr/TBHR52tAvH+hXpHAvFZGOU13w5u7gbTaEDb14y3qH+/xf1TKPY8uAv6041',
  'e5404b5a9d3a4e1f765c634d423d472b'
);

const logger = createLogger({
  level: 'debug',
  format: format.simple(),
  transports: [new transports.Console()]
});

const { Op } = Sequelize;

export const registerUser = async (req, res) => {
  const {
    firstname, lastname, email, password
  } = req.body;

  try {
    const foundUser = await User.findOne({
      where: { email: { [Op.eq]: email } }
    });

    if (foundUser) {
      return res.status(409).send({
        status: 'fail',
        data: { email: 'User with this email already exist.' }
      });
    }

    const createdUser = await User.create({
      firstname,
      lastname,
      email,
      password
    });

    const link = process.env.NODE_ENV === 'production'
      ? `${process.env.REACT_ENDPOINT}/api/users/${createdUser.id}/verify`
      : `${req.protocol}://${req.headers.host}/api/users/${
        createdUser.id
      }/verify`;

    if (process.env.NODE_ENV === 'production') {
      try {
        await sendVerificationMail(firstname, email, link);
      } catch (error) {
        logger.debug('Email Error::', error);
      }
    }

    return res.status(201).send({
      status: 'success',
      data: {
        message: `A confirmation email has been sent to ${email}. Click on the confirmation button to verify the account`,
        link
      }
    });
  } catch (e) {
    res.status(500).send({
      status: 'error',
      message: 'Internal server error occured.'
    });
  }
};

export const verifyUser = async (req, res) => {
  try {
    const { id } = req.params;
    const unverifiedUser = await User.findByPk(id);

    if (!unverifiedUser) {
      return res.status(404).send({
        status: 'fail',
        data: { message: 'user does not exist' }
      });
    }

    if (unverifiedUser.isVerified) {
      return res.status(400).send({
        status: 'fail',
        message: 'User is already verified'
      });
    }

    const { email, username, role } = await unverifiedUser.update(
      { isVerified: true },
      { returning: true, plain: true }
    );
    const token = signToken({
      sid: req.sessionID,
      id,
      email,
      role
    });

    return res.status(200).send({
      status: 'success',
      data: {
        message: "Verification successful. You're all set!",
        user: {
          id,
          username,
          email,
          token,
          role
        }
      }
    });
  } catch (e) {
    return res.status(500).send({
      status: 'error',
      message: 'Internal server error occured.'
    });
  }
};

export const loginUser = async (req, res) => {
  const userCredentials = req.body;
  const { email, password } = userCredentials;

  // Check if the user exists in the database
  const foundUser = await User.findOne({
    where: { email: { [Op.eq]: email } }
  });
  if (!foundUser) {
    return res.status(401).send({
      status: 'fail',
      message: 'Provide correct login credentials'
    });
  }

  if (!foundUser.isVerified) {
    return res.status(403).send({
      status: 'fail',
      message: 'Email not verified'
    });
  }

  if (!User.passwordMatch(foundUser.password, password)) {
    return res.status(401).send({
      status: 'fail',
      message: 'Provide correct login credentials'
    });
  }

  const { id, role } = foundUser;

  const token = signToken({
    sid: req.sessionID,
    id,
    email,
    role
  });

  return res.status(200).send({
    status: 'success',
    data: {
      userId: foundUser.id,
      email,
      token
    }
  });
};

export const adminUploadVideo = async (req, res) => {
  const videoName = req.file.path;
  client.upload(
    videoName,
    {
      name: 'first video',
      description: 'description of strange video'
    },
    function (uri) {
      // the responses from this function gatz show, all of them.
      confirmUploadStatus(client, uri);
      getVideoUrl(client, uri);
    },
    function (bytesUploaded, bytesTotal) {
      const percentage = ((bytesUploaded / bytesTotal) * 100).toFixed(2);
      // this message gatz show
      console.log(
        `Your video is uploading, Have small patience: ${percentage} %`
      );
    },
    function (error) {
      // also if this fails, no fail to show message
      console.log(`Failed because: ${error}`);
    }
  );
};
