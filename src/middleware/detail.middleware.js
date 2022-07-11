const {
  detailFormatError
} = require('../constant/err.type')

const validator = (rules) => {
  return async (ctx, next) => {
    try {
      ctx.verifyParams(rules)
    } catch (err) {
      console.error(err)
      detailFormatError.data = err
      return ctx.app.emit('error', detailFormatError, ctx)
    }
    await next()
  }
}

module.exports = {
  validator
}