const {
  getGuessYouLike,
  getCartRecommendInfo,
  getAllProduct
} = require('../service/product.service')

const {
  getGuessYouLikeError,
  getCartRecommendError
} = require('../constant/err.type')

class ProductController {
  // get guess you like info
  async getGuessYouLike(ctx) {
    try {
      ctx.body = {
        code: 200,
        message: '获取猜你喜欢列表成功',
        data: await getGuessYouLike()
      }
    } catch (err) {
      console.error(err)
      return ctx.app.emit('error', getGuessYouLikeError, ctx)
    }
  }

  // get cart recommend info
  async getCartRecommend(ctx) {
    try {
      ctx.body = {
        code: 200,
        message: '获取购物车推荐列表成功',
        data: await getCartRecommendInfo()
      }
    } catch (err) {
      console.error(err)
      return ctx.app.emit('error', getCartRecommendError, ctx)
    }
  }

  async findAll(ctx) {
    ctx.body = {
      data: await getAllProduct()
    }
  }
}

module.exports = new ProductController()