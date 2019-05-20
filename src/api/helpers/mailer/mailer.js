import sgMail from '@sendgrid/mail';
import env from 'dotenv';
import verifyTemplate from './templates/verifyUser';

env.config();
sgMail.setApiKey(process.env.SENDGRID_KEY);

export const sendVerificationMail = (username, email, url) => {
  const msg = {
    to: email,
    from: 'support@authors-haven.com',
    subject: '[Author\'s Haven] Email Verification',
    html: verifyTemplate(username, url),
  };
  return sgMail.send(msg);
};
