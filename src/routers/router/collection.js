const Router = require('koa-router')

const router = new Router({
  prefix: '/collection'
})

// controller
const {
  add,
  findAll,
  del
} = require('../../controller/collection.controller')

// middleware
const {
  validator
} = require('../../middleware/collection.middleware')

const {
  validationProductId
} = require('../../middleware/product.middleware')

const {
  auth
} = require('../../middleware/auth.middleware')

// format check
const {
  addType,
  delType
} = require('../../utils/formatCheck/collection.format')

// router
router
  .post('/', auth, validator(addType), validationProductId, add)
  .get('/', auth, findAll)
  .delete('/', auth, validator(delType), del)

module.exports = router