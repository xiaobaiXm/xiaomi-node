const {
  addressFormatError
} = require('../constant/err.type')

const validator = (rules) => {
  return async (ctx, next) => {
    try {
      ctx.verifyParams(rules)
    } catch (err) {
      console.error(err)
      addressFormatError.data = err
      return ctx.app.emit('error', addressFormatError, ctx)
    }
    await next()
  }
}

module.exports = {
  validator
}