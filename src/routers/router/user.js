const Router = require('koa-router')

const router = new Router({
  prefix: '/user'
})

// controller
const {
  register,
  login,
  verifyUserName,
  changePassword
} = require('../../controller/user.controller.js')

// middleware
const {
  userValidator,
  cryptPassword,
  verifyLogin,
  schema
} = require('../../middleware/user.middleware')

const {
  auth
} = require('../../middleware/auth.middleware')

const {
  user
} = require('../../model/formatCheck/user.schema')

// router
router
  .post('/login', schema('post', user), verifyLogin, login)
  .post('/register', userValidator, cryptPassword, register)
  .post('/verifyName', verifyUserName)
  .patch('/', auth, cryptPassword, changePassword)
  .get('/', auth)

module.exports = router