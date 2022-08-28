const {
  createOrUpdate,
  findCartsAll,
  updateCarts,
  removeCarts,
  selectAllCarts,
  userSelectCarts,
  removeUserSuccessfulOrder
} = require('../service/cart.service')

const {
  addShopCartError,
  findAllCartError,
  updateShopCartError,
  cartSelectAllError,
  removeCartError,
  findUserSelectError,
  removeUserSuccessfulOrderError
} = require('../constant/err.type')

class CartController {
  async addShopCart(ctx) {
    const user_id = ctx.state.user.id
    const product_id = ctx.request.body.productId
    const cart_sku_id = ctx.request.body.cartSkuId

    try {
      ctx.body = {
        code: 200,
        message: '添加购物车成功',
        data: await createOrUpdate(user_id, product_id, cart_sku_id)
      }
    } catch (err) {
      console.error(err)
      return ctx.app.emit('error', addShopCartError, ctx)
    }
  }

  async findAll(ctx) {
    const user_id = ctx.state.user.id

    try {
      ctx.body = {
        code: 200,
        message: '获取购物车列表成功',
        data: await findCartsAll(user_id)
      }
    } catch (err) {
      console.error(err)
      return ctx.app.emit('error', findAllCartError, ctx)
    }
  }

  async update(ctx) {
    const {
      id
    } = ctx.request.params
    const {
      number,
      selected
    } = ctx.request.body

    try {
      ctx.body = {
        code: 200,
        message: '更新购物车成功',
        data: await updateCarts({
          id,
          number,
          selected
        })
      }
    } catch (err) {
      console.error(err)
      ctx.app.emit('error', updateShopCartError, ctx)
    }
  }

  async remove(ctx) {
    const {
      ids
    } = ctx.request.body

    try {
      ctx.body = {
        code: 200,
        message: '删除购物车成功',
        data:  await removeCarts(ids)
      }
    } catch (err) {
      console.error(err)
      return ctx.app.emit('error', removeCartError, ctx)
    }
  }

  async selectAll(ctx) {
    const user_id = ctx.state.user.id
    const {
      selected
    } = ctx.request.body

    try {
      ctx.body = {
        code: 200,
        message: '购物车状态更新成功',
        data: await selectAllCarts(user_id, selected)
      }
    } catch (err) {
      console.error(err)
      return ctx.app.emit('error', cartSelectAllError, ctx)
    }
  }

  async findSelect(ctx) {
    const user_id = ctx.state.user.id
    try {
      ctx.body = {
        code: 200,
        message: '查找用户选中产品成功',
        data: await userSelectCarts(user_id)
      }
    } catch (err) {
      console.error(err)
      return ctx.app.emit('error', findUserSelectError, ctx)
    }
  }

  async success(ctx) {
    try {
      ctx.body = {
        code: 200,
        message: '删除下单产品成功',
        data: await removeUserSuccessfulOrder(user_id)
      }
    } catch (err) {
      console.error(err)
      return ctx.app.emit('error', removeUserSuccessfulOrderError, ctx)
    }
  }
}

module.exports = new CartController()