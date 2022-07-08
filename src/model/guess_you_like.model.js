const {
  DataTypes
} = require('sequelize')

const seq = require('../db/seq')

// product model 
const Product = require('../model/product.model')

// guess you like model
const Guess_you_like = seq.define('mi_guess_you_like', {
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
// Guess_you_like.sync({
//   force: true
// })

Guess_you_like.belongsTo(Product, {
  foreignKey: 'product_id',
  as: 'guess_you_like_product_id'
})

module.exports = Guess_you_like