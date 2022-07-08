const {
  DataTypes
} = require('sequelize')

const seq = require('../db/seq')

// create order model
const Order = seq.define('mi_order', {
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: 'user id'
  },
  address_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: 'address id'
  },
  product_info: {
    type: DataTypes.TEXT,
    allowNull: false,
    comment: 'product info'
  },
  total: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    comment: 'total'
  },
  order_number: {
    type: DataTypes.CHAR(15),
    allowNull: false,
    comment: 'order number'
  },
  status: {
    type: DataTypes.TINYINT,
    allowNull: false,
    defaultValue: 0,
    comment: 'order status 0:未支付，1：已支付，2：已发货，3：已签收，4：取消'
  }
})

// synchronizing databases
// Order.sync({
//   force: true
// })

module.exports = Order