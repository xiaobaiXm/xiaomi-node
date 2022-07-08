const JWT = require('jsonwebtoken')

const {
  createUser,
  getUserInfo,
  updateUserInfoById
} = require('../service/user.service')

const {
  userRegisterError,
  userAlreadyExists,
  changePasswordError
} = require('../constant/err.type')

const {
  JWT_SECRET,
  JWT_VALIDITY
} = require('../config/config.default')

class UserController {
  // register
  async register(ctx, next) {
    const {
      user_name,
      password
    } = ctx.request.body

    try {
      const res = await createUser(user_name, password)
      ctx.body = {
        code: 200,
        message: "用户注册成功",
        data: {
          id: res.id,
          user_name: res.user_name
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
      user_name
    } = ctx.request.body

    // get user info and return token 
    try {
      // to eliminate password
      const {
        password,
        ...res
      } = await getUserInfo({
        user_name
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
    }
  }

  // verify user name
  async verifyUserName(ctx, next) {
    const {
      user_name
    } = ctx.request.body

    try {
      if (await getUserInfo({
          user_name
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
}

module.exports = new UserController()