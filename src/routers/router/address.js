const Router = require('koa-router')

const router = new Router({
  prefix: '/address'
})

// controller
const {
  create,
  findAll,
  findPage,
  update,
  remove,
  setDefault,
  allAddressInfo
} = require('../../controller/address.controller')

// middleware
const {
  validator
} = require('../../middleware/address.middleware')

const {
  auth
} = require('../../middleware/auth.middleware')

// format check
const {
  createOrUpdateAddress,
  findAllAddress
} = require('../../utils/formatCheck/address.format')

// router
router
  .post('/', auth, validator(createOrUpdateAddress), create)
  .post('/address', auth, validator(findAllAddress), findPage)
  .get('/', auth, findAll)
  .put('/:id', auth, validator(createOrUpdateAddress), update)
  .delete('/:id', auth, remove)
  .patch('/:id', auth, setDefault)
  .get('/info', allAddressInfo)

module.exports = router