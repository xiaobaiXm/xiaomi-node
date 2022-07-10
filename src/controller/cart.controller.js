const {
  createOrUpdate,
  findCartsAll,
  updateCarts,
  removeCarts,
  selectAllCarts,
  getUserCartsCountInfo
} = require('../service/cart.service')

const {
  addShopCartError,
  findAllCartError,
  updateShopCartError,
  cartSelectAllError,
  removeCartError,
  getCartCountError
} = require('../constant/err.type')

class CartController {
  async addShopCart(ctx) {
    const user_id = ctx.state.user.id
    const product_id = ctx.request.body.product_id
    const cart_sku_id = ctx.request.body.cart_sku_id

    try {
      await createOrUpdate(user_id, product_id, cart_sku_id)
      ctx.body = {
        code: 200,
        message: '添加购物车成功',
        data: ''
      }
    } catch (err) {
      console.error('添加购物车失败', err)
      ctx.app.emit('error', addShopCartError, ctx)
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
        data: res = await removeCarts(ids)
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

  async findCount(ctx) {
    const user_id = ctx.state.user.id
    try {
      ctx.body = {
        code: 200,
        message: '获取购物车数量成功',
        data: await getUserCartsCountInfo(user_id)
      }
    } catch (err) {
      console.error(err)
      return ctx.app.emit('error', getCartCountError, ctx)
    }
  }
}

module.exports = new CartController()