// order model 
const Order = require('../model/order.model')

// 连接 order 数据库
class OrderService {
  async createOrder(orderInfo) {
    return await Order.create(orderInfo)
  }

  async findAllOrder(params) {
    const {
      user_id,
      pageNum,
      pageSize,
      status
    } = params
    const {
      count,
      rows
    } = await Order.findAndCountAll({
      attributes: ['product_info', 'total', 'order_number', 'status'],
      where: {
        user_id,
        status
      },
      offset: (pageSize - 1) * pageSize,
      limit: pageSize * 1
    })

    return {
      pageNum,
      pageSize,
      total,
      count,
      list: rows
    }
  }

  async updateOrder(id, status) {
    return await Order.update({
      status
    }, {
      where: {
        id
      }
    })
  }
}

module.exports = new OrderService()