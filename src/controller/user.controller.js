const JWT = require('jsonwebtoken')

const {
  createUser,
  getUserInfo,
  updateUserInfoById
} = require('../service/user.service')

const {
  userRegisterError,
  userAlreadyExists,
  changePasswordError,
  userLoginError,
  findUserInfoError
} = require('../constant/err.type')

const {
  JWT_SECRET,
  JWT_VALIDITY
} = require('../config/config.default')

class UserController {
  // register
  async register(ctx, next) {
    const {
      username,
      password
    } = ctx.request.body

    try {
      const res = await createUser(username, password)
      ctx.body = {
        code: 200,
        message: "用户注册成功",
        data: {
          id: res.id,
          username: res.username
        }
      }
    } catch (err) {
      console.error(err)
      ctx.app.emit("error", userRegisterError, ctx)
    }
  }

  // login 
  async login(ctx, next) {
    const {
      username
    } = ctx.request.body

    // get user info and return token 
    try {
      // to eliminate password
      const {
        password,
        ...res
      } = await getUserInfo({
        username
      })

      ctx.body = {
        code: 200,
        message: "登录成功",
        data: {
          token: JWT.sign(res, JWT_SECRET, {
            expiresIn: JWT_VALIDITY
          })
        }
      }
    } catch (err) {
      console.error('登录失败', err)
      ctx.app.emit("error", userLoginError, ctx)
    }
  }

  // verify user name
  async verifyUserName(ctx, next) {
    const {
      username
    } = ctx.request.body

    try {
      if (await getUserInfo({
        username
      })) {
        return ctx.app.emit('error', userAlreadyExists, ctx)
      }

      ctx.body = {
        code: 200,
        message: "用户名不存在",
        data: ''
      }
    } catch (err) {
      console.error('获取用户信息失败', err)
    }
  }

  // change password
  async changePassword(ctx, next) {
    const id = ctx.state.user.id
    const password = ctx.request.body.password

    if (await updateUserInfoById({
      id,
      password
    })) {
      ctx.body = {
        code: 200,
        message: '密码修改成功',
        data: ''
      }
    } else {
      console.error('密码更新失败')
      ctx.app.emit('error', changePasswordError, ctx)
    }
  }

  // get user info
  async userInfo(ctx) {
    const id = ctx.state.user.id

    try {
      ctx.body = {
        code: 200,
        message: '获取用户信息成功',
        data: await getUserInfo({ id })
      }
    } catch (err) {
      console.err(err)
      ctx.app.emit('error', findUserInfoError, ctx)
    }
  }
}

module.exports = new UserController()