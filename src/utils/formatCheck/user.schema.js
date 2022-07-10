const Joi = require('joi')

const user = Joi.object({
  user_name: Joi.string().alphanum().min(2).max(8).required(),
  password: Joi.string().pattern(/^[\S]{8,16}$/).required()
})

module.exports = {
  user
}