const Router = require('koa-router')

const router = new Router({
  prefix: '/search'
})

// controller
const {
  findProduct,
  findKeyword
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
  .get('/keyword', findKeyword)

module.exports = router