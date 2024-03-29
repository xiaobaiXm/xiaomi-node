const {
  DataTypes
} = require('sequelize')

const seq = require('../db/seq')

// other models
const Product = require('./product.model')
const Sku = require('./sku.model')

// create nav model
const Nav = seq.define('mi_nav', {
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    comment: 'product id'
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: 'nav name'
  },
  price: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: 'price'
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
  },
  show: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
    comment: 'show flag'
  }
})

// synchronizing databases
// Nav.sync({
//   force: true
// })

module.exports = Nav