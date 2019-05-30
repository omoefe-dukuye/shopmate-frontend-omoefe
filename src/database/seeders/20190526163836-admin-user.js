import '@babel/polyfill';
import dotenv from 'dotenv';
import uuid from 'uuid/v4';

import bcrypt from 'bcrypt';

dotenv.config();

const salt = bcrypt.genSaltSync(10);
export default {
  up: queryInterface => queryInterface.bulkInsert(
    'Users',
    [
      {
        id: uuid(),
        email: process.env.ADMIN_EMAIL,
        lastname: process.env.ADMIN_LASTNAME,
        firstname: process.env.ADMIN_FIRSTNAME,
        password: bcrypt.hashSync(process.env.ADMIN_PASSWORD, salt),
        isVerified: true,
        role: 'admin',
        createdAt: '2019-02-11 14:35:51.434+01',
        updatedAt: '2019-02-11 14:35:51.434+01'
      }
    ],
    {}
  ),

  down: queryInterface => queryInterface.bulkDelete('Users', null, {})
};
