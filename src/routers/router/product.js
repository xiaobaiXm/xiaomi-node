const Router = require('koa-router')
const router = new Router({
  prefix: '/product'
})

// controller
const {
  getGuessYouLike
} = require('../../controller/product.controller')

// middleware

// router
router
  .get('/guessYouLike', getGuessYouLike)


module.exports = router