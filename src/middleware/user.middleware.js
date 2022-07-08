const bcrypt = require('bcryptjs')

const {
  userFormateError,
  userDoesNotExist,
  userLoginError,
  invalidPassword
} = require('../constant/err.type')

const {
  getUserInfo
} = require('../service/user.service')

const userValidator = async (ctx, next) => {
  const {
    user_name,
    password
  } = ctx.request.body

  if (!user_name || !password) {
    console.error('用户名或密码为空', ctx.request.body)
    return ctx.app.emit('error', userFormateError, ctx)
  }
  await next()
}

const cryptPassword = async (ctx, next) => {
  const {
    password
  } = ctx.request.body

  const salt = bcrypt.genSaltSync(10)
  const hash = bcrypt.hashSync(password, salt)

  ctx.request.body.password = hash

  await next()
}

const verifyLogin = async (ctx, next) => {
  const {
    user_name,
    password
  } = ctx.request.body
  // user whether exists
  try {
    const res = await getUserInfo({
      user_name
    })

    if (!res) {
      console.error('用户名不存在', {
        user_name
      })
      return ctx.app.emit('error', userDoesNotExist, ctx)
    }

    // user_name and password are consistent
    if (!bcrypt.compareSync(password, res.password)) {
      return ctx.app.emit('error', invalidPassword, ctx)
    }
  } catch (err) {
    console.error(err)
    return ctx.app.emit('error', userLoginError, ctx)
  }
  await next()
}

const schema = (method, schemas) => {
  validateSchema = async (ctx, next) => {
    let data = null
    if (method === "get") {
      data = await ctx.request.query;
    } else {
      data = await ctx.request.body;
    }

    const {
      err
    } = schemas.validate(data)
    if (err) {
      return console.err(err)
    }
    await next()
  }
  return validateSchema
}

module.exports = {
  userValidator,
  cryptPassword,
  verifyLogin,
  schema
}