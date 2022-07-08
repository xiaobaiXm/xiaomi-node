const {
  searchFormatError
} = require('../constant/err.type')

const validator = (rules) => {
  return async (ctx, next) => {
    try {
      ctx.verifyParams(rules)
    } catch (err) {
      console.error(err)
      ctx.app.emit('error', searchFormatError, ctx)
    }
    await next()
  }
}

module.exports = {
  validator
}