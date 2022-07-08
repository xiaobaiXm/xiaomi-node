const {
  createOrUpdate,
  findCartsAll,
  updateCarts,
  removeCarts,
  selectAllCarts
} = require('../service/cart.service')

const {
  addShopCartError,
  findAllShopCartError,
  updateShopCartError
} = require('../constant/err.type')

class CartController {
  async addShopCart(ctx) {
    const user_id = ctx.state.user.id
    const product_id = ctx.request.body.product_id

    try {
      await createOrUpdate(user_id, product_id)
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

    const res = await findCartsAll(user_id)

    ctx.body = {
      code: 200,
      message: '获取购物车成功',
      data: res
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
      const res = await updateCarts({
        id,
        number,
        selected
      })
      ctx.body = {
        code: 200,
        message: '更新购物车成功',
        data: res
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

    const res = await removeCarts(ids)

    ctx.body = {
      code: 200,
      message: '删除购物车成功',
      data: res
    }
  }

  async selectAll(ctx) {
    const user_id = ctx.state.user.id
    const {
      selected
    } = ctx.request.body

    const res = await selectAllCarts(user_id, selected)

    ctx.body = {
      code: 200,
      message: '状态更新成功',
      data: res
    }
  }
}

module.exports = new CartController()