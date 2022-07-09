const {
  getKeywordInfo
} = require('../service/search.service')

const {
  searchFormatError,
  searchProductError
} = require('../constant/err.type')

const validator = (rules) => {
  return async (ctx, next) => {
    try {
      ctx.verifyParams(rules)
    } catch (err) {
      console.error(err)
      searchFormatError.data = err
      return ctx.app.emit('error', searchFormatError, ctx)
    }
    await next()
  }
}

const disposeParameter = async (ctx, next) => {
  const keywordRes = await getKeywordInfo(ctx.request.body.keyword)

  try {
    if (keywordRes) {
      ctx.request.body.keyword = keywordRes.id
      await next()
    } else {
      console.error(err)
      return ctx.app.emit('error', searchProductError, ctx)
    }
  } catch (err) {
    console.error(err)
    return ctx.app.emit('error', searchProductError, ctx)
  }
}


module.exports = {
  validator,
  disposeParameter
}