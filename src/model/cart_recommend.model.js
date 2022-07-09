const {
  DataTypes
} = require('sequelize')

const seq = require('../db/seq')

// product model 
const Product = require('../model/product.model')

// cart recommend  model
const Cart_recommend = seq.define('mi_cart_recommend', {
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    comment: 'product id',
  },
  favorable_comment: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: 'favorable comment',
  },
})

// synchronizing databases
// Cart_recommend.sync({
//   force: true
// })

// Cart_recommend.belongsTo(Product, {
//   foreignKey: 'product_id',
//   as: 'guess_you_like_product_id'
// })

module.exports = Cart_recommend