const {
  DataTypes
} = require('sequelize')

const seq = require('../db/seq')

const Product = require('./product.model')

// create nav model
const Nav = seq.define('mi_nav', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: 'nav name'
  },
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: 'nav product id'
  },
  group: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: 'nav group'
  }
})

// synchronizing databases
// Nav.sync({
//   force: true
// })

Nav.belongsTo(Product, {
  foreignKey: 'product_id',
  as: 'nav_product_info'
})

module.exports = Nav