const {
  invalidProductID,
  productNotAvailable,
  productFormatError
} = require('../constant/err.type')

const {
  getProductInfo,
  findProductInventory
} = require('../service/product.service')

const validator = (rules) => {
  return async (ctx, next) => {
    try {
      ctx.verifyParams(rules)
    } catch (err) {
      console.error(err)
      productFormatError.data = err
      return ctx.app.emit('error', productFormatError, ctx)
    }
    await next()
  }
}

const validationProductId = async (ctx, next) => {
  const product_id = ctx.request.body.productId

  if (await getProductInfo(product_id)) {
    await next()
  } else {
    ctx.app.emit('error', invalidProductID, ctx)
  }
}

const findInventory = async (ctx, next) => {
  const product_id = ctx.request.body.product_id

  if (await findProductInventory(product_id)) {
    await next()
  } else {
    ctx.app.emit('error', productNotAvailable, ctx)
  }
}

module.exports = {
  validator,
  validationProductId,
  findInventory
}