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
  validator,
  disposeParameter
} = require('../../middleware/search.middleware')

// format check
const {
  findType
} = require('../../utils/formatCheck/search.format')

// router
router
  .post('/', validator(findType), disposeParameter, findProduct)
  .get('/keyword', findKeyword)

module.exports = router