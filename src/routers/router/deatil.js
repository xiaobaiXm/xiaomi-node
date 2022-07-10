const Router = require('koa-router')
const router = new Router({
  prefix: '/detail'
})

// middleware
const {

} = require('../../middleware/cart.middleware')

// controller
const {

} = require('../../controller/cart.controller')


// format check
const {

} = require('../../utils/formatCheck/cart.format')

// router
router


module.exports = router