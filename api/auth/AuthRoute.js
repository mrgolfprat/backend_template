/* สําหรับเชื่อต่อ Route */
const { Router } = require('express')
const { check } = require('express-validator/check')
const { validator } = require('../../middleware/validator')
const router = Router();

const AuthController = require('./AuthController')

router.post('/register',
  [
    check('username').isString().isLength({ min: 5 }).withMessage('username invalid'),
    check('password').isString().isLength({ min: 5 }).withMessage('password invalid'),
    check('age').isNumeric().withMessage('age invalid'),
    check('fname').isString().withMessage('firstname invalid'),
    check('lname').isString().withMessage('lastname invalid'),
  ],
  validator(),
  AuthController.register
)

router.post('/login',
  [
    check('username').isString().withMessage('username invalid'),
    check('password').isString().withMessage('password invalid'),
  ],
  validator(),
  AuthController.login
)

module.exports = router