const {
  getKeywordInfo
} = require('../service/search.service')

const Sku = require('../model/sku.model')

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
    } else {
      console.error(err)
      return ctx.app.emit('error', searchProductError, ctx)
    }
  } catch (err) {
    console.error(err)
    return ctx.app.emit('error', searchProductError, ctx)
  }
  let newOrder = {}

  switch (ctx.request.body.order) {
    case '1':
      newOrder.model = ''
      newOrder.field = 'id'
      newOrder.way = 'ASC'
      ctx.request.body.order = newOrder
      await next()
      break
    case '2:desc':
      newOrder.model = Sku
      newOrder.field = 'price'
      newOrder.way = 'DESC'
      ctx.request.body.order = newOrder
      await next()
      break
    case '2:asc':
      newOrder.model = Sku
      newOrder.field = 'price'
      newOrder.way = 'ASC'
      ctx.request.body.order = newOrder
      await next()
      break
    case '3':
      newOrder.field = 'sales'
      newOrder.way = 'DESC'
      ctx.request.body.order = newOrder
      await next()
      break
    case '4':
      newOrder.field = 'createdAt'
      newOrder.way = 'DESC'
      ctx.request.body.order = newOrder
      await next()
      break
  }
}

module.exports = {
  validator,
  disposeParameter
}