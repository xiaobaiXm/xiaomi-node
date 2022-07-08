const {
  DataTypes
} = require('sequelize')

const seq = require('../db/seq')

const Product = require('./product.model')

// create category model
const Category = seq.define('mi_category', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: 'category name'
  }
})

// synchronizing databases
// Category.sync({
//   force: true
// })

// Category.belongsTo(Product, {
//   foreignKey: 'id',
//   as: 'category_id'
// })

module.exports = Category