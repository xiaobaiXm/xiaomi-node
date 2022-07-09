const Router = require('koa-router')

const router = new Router({
  prefix: '/product'
})

// controller
const {
  getGuessYouLike,
  getCartRecommend,
  findAll
} = require('../../controller/product.controller')

// middleware

// router
router
  .get('/guessYouLike', getGuessYouLike)
  .get('/cartRecommend', getCartRecommend)
  .get('/', findAll)


module.exports = router