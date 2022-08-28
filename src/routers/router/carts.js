const Router = require('koa-router')
const router = new Router({
  prefix: '/cart'
})

// controller
const {
  addShopCart,
  findAll,
  update,
  remove,
  selectAll,
  findSelect,
  success
} = require('../../controller/cart.controller')

// middleware
const {
  validator,
} = require('../../middleware/cart.middleware')

const {
  validationProductId,
  findInventory
} = require('../../middleware/product.middleware')

const {
  auth
} = require('../../middleware/auth.middleware')

// format check
const {
  addCart,
  updateCart,
  removeCart
} = require('../../utils/formatCheck/cart.format')

// router
router
  .post('/', auth, validator(addCart), validationProductId, findInventory, addShopCart)
  .post('/success' ,auth , success)
  .get('/', auth, findAll)
  .get('/select' , auth ,findSelect )
  .patch('/:id', auth, validator(updateCart), update)
  .delete('/', auth, validator(removeCart), remove)
  .post('/selectAll', auth, selectAll)

module.exports = router