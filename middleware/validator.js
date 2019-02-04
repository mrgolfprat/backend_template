const { validationResult } = require('express-validator/check')
const { failed } = require('../config/response')

exports.validator = () => (req, res, next) => {
  const error = validationResult(req)

  if (!error.isEmpty()) {
    return failed(res, error.array()[0].msg)
  }

  next()

}