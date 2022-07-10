const Router = require('koa-router')

const router = new Router({
  prefix: '/orders'
})

// controller
const {
  create,
  findAll,
  update
} = require('../../controller/order.controller')

// middleware
const {
  validator
} = require('../../middleware/order.middleware')

const {
  auth
} = require('../../middleware/auth.middleware')

// format check
const {
  createOrder,
  updateOrder
} = require('../../utils/formatCheck/order.format')

// router
router
  .post('/', auth, validator(createOrder), create)
  .get('/', auth, findAll)
  .patch('/:id', auth, validator(updateOrder), update)

module.exports = router