const {
  DataTypes
} = require('sequelize')

const seq = require('../db/seq')

// create category model
const Category = seq.define('mi_category', {
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    comment: 'product id'
  },
  keyword: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue: true,
    comment: 'keyword'
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: 'nav name'
  },
  img: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: 'img'
  },
  group: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: 'group'
  }
})

// synchronizing databases
// Category.sync({
//   force: true
// })

module.exports = Category