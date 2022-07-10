const {
  DataTypes
} = require('sequelize')

const seq = require('../db/seq')

// other models
const Product = require('./product.model')
const Sku = require('./sku.model')

// create cart model
const Cart = seq.define('mi_cart', {
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: 'goods id'
  },
  cart_sku_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: 'sku id'
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: 'user id'
  },
  number: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
    comment: 'goods number'
  },
  selected: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
    comment: 'selected status'
  }
})

// synchronizing databases
// Cart.sync({
//   force: true
// })

Cart.belongsTo(Product, {
  foreignKey: 'product_id',
  as: 'cart_product_info'
})


module.exports = Cart