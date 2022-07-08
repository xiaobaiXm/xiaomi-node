const {
  collectionFormatError
} = require('../constant/err.type')

const validator = (rules) => {
  return async (ctx, next) => {
    try {
      ctx.verifyParams(rules)
    } catch (err) {
      console.error(err)
      collectionFormatError.data = err
      return ctx.app.emit('error', collectionFormatError, ctx)
    }
    await next()
  }
}

module.exports = {
  validator
}