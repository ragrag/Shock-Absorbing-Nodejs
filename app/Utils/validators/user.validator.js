const Joi = require('joi');

module.exports.validateUserRegister = (userDTO) => {
  const schema = {
    name: Joi.string()
      .min(3)
      .max(255)
      .required(),
    email: Joi.string()
      .max(255)
      .required()
      .email(),
    password: Joi.string().required()
  };
  return Joi.validate(userDTO, schema);
};

module.exports.validateUserLogin = (userDTO) => {
  const schema = {
    email: Joi.string()
      .max(255)
      .required()
      .email(),
    password: Joi.string().required()
  };
  return Joi.validate(userDTO, schema);
};
