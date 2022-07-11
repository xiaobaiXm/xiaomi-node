const Router = require('koa-router')
const router = new Router({
  prefix: '/detail'
})

// controller
const {
  find
} = require('../../controller/detail.controller')

// middleware
const {
  validator
} = require('../../middleware/detail.middleware')

const {
  validationProductId
} = require('../../middleware/product.middleware')

// format check
const {
  findType
} = require('../../utils//formatCheck/detail.formate')

// router
router
  .post('/', validator(findType), validationProductId, find)

module.exports = router