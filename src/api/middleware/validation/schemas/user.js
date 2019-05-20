import Joi from 'joi';

const firstname = Joi.string().trim().strict().min(3)
  .required();

const lastname = Joi.string().trim().strict().min(3)
  .required();

const email = Joi.string().trim().strict().min(10)
  .max(100)
  .email()
  .required();

const password = Joi.string().trim().strict().alphanum()
  .min(8)
  .max(40)
  .required();

const registrationRequestSchema = {
  firstname,
  lastname,
  email,
  password,
};


const loginRequestSchema = {
  email,
  password,
};

export {
  loginRequestSchema, registrationRequestSchema
};
