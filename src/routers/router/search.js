const Router = require('koa-router')

const router = new Router({
  prefix: '/search'
})

// controller
const {
  findProduct
} = require('../../controller/search.controller')

// middleware
const {
  validator
} = require('../../middleware/search.middleware')

// format check
const {
  findType
} = require('../../model/formatCheck/search.format')

// router
router
  .post('/', validator(findType), findProduct)

module.exports = router