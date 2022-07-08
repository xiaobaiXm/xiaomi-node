const {
  getGuessYouLike
} = require('../service/product.service')

const {
  getGuessYouLikeError
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
}

module.exports = new ProductController()