const {
  createOrder,
  findAllOrder
} = require('../service/order,service')

class OrderController {
  async create(ctx) {
    const user_id = ctx.state.user.id

    const {
      address_id,
      product_id,
      total
    } = ctx.request.body

    const order_number = 'XM' + Date.now()

    ctx.body = {
      code: 200,
      message: '创建订单成功',
      data: await createOrder({
        user_id,
        order_number,
        address_id,
        product_id,
        total
      })
    }
  }

  async findAll(ctx) {
    const user_id = ctx.state.user.id
    const {
      pageNum = 1,
        pageSize = 10,
        status = 0
    } = ctx.request.query

    ctx.body = {
      code: 200,
      message: '获取订单数据成功',
      data: await findAllOrder({
        user_id,
        pageNum,
        pageSize,
        status
      })
    }
  }

  async update(ctx) {
    const id = ctx.request.params.id

    const {
      status
    } = ctx.request.body

    ctx.body = {
      code: 200,
      message: '更新状态成功',
      data: await updateOrder(id, status)
    }
  }
}

module.exports = new OrderController()