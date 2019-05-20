import Sequelize from 'sequelize';
import { createLogger, format, transports } from 'winston';
import { signToken } from '../helpers/tokenization/tokenize';
import { User } from '../../database/models';
import { sendVerificationMail } from '../helpers/mailer/mailer';

const logger = createLogger({
  level: 'debug',
  format: format.simple(),
  transports: [new transports.Console()]
});

const { Op } = Sequelize;

export const registerUser = async (req, res) => {
  const {
    firstname, lastname, email, password,
  } = req.body;

  try {
    const foundUser = await User.findOne({ where: { email: { [Op.eq]: email } } });

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
      password,
    });

    const link = process.env.NODE_ENV === 'production'
      ? `${process.env.REACT_ENDPOINT}/api/users/${createdUser.id}/verify`
      : `${req.protocol}://${req.headers.host}/api/users/${createdUser.id}/verify`;

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
      },
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

    const { email, username, role } = await unverifiedUser.update({ isVerified: true },
      { returning: true, plain: true });
    const token = signToken({
      sid: req.sessionID,
      id,
      email,
      role
    });

    return res.status(200).send({
      status: 'success',
      data: {
        message: 'Verification successful. You\'re all set!',
        user: {
          id, username, email, token, role
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
  const foundUser = await User.findOne({ where: { email: { [Op.eq]: email } } });
  if (!foundUser) {
    return res.status(401).send({
      status: 'fail',
      message: 'Provide correct login credentials',
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
      message: 'Provide correct login credentials',
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
