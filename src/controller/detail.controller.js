const {
  getProductDetail
} = require('../service/detail.service')

// err info
const {
  getProductDetailError
} = require('../constant/err.type')

class DetailController {
  async find(ctx) {
    const {
      productId
    } = ctx.request.body
    const id = parseInt(productId)
    try {
      ctx.body = {
        code: 200,
        message: '获取商品详情成功',
        data: await getProductDetail(id)
      }
    } catch (err) {
      console.error(err)
      return ctx.app.emit('error', getProductDetailError, ctx)
    }
  }
}

module.exports = new DetailController()