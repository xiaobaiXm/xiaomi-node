const Router = require('koa-router')
const router = new Router({
  prefix: '/cart'
})

// middleware
const {
  validator,
} = require('../../middleware/cart.middleware')

const {
  validationProductId,
  findInventory
} = require('../../middleware/product.middleware')

// controller
const {
  addShopCart,
  findAll,
  update,
  remove,
  selectAll,
} = require('../../controller/cart.controller')

const {
  auth
} = require('../../middleware/auth.middleware')

// format check
const {
  addCart,
  updateCart,
  removeCart
} = require('../../model/formatCheck/cart.format')

// router
router
  .post('/', auth, validator(addCart), validationProductId, findInventory, addShopCart)
  .get('/carts', auth, findAll)
  .patch('/:id', auth, validator(updateCart), update)
  .delete('/', auth, validator(removeCart), remove)
  .post('/selectAll', auth, selectAll)

module.exports = router