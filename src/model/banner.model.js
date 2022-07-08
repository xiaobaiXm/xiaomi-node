const {
  DataTypes
} = require('sequelize')

const seq = require('../db/seq')

// product model
const Product = require('../model/product.model')

// create banner model
const Banner = seq.define('mi_banner', {
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: 'product id'
  },
  img: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: 'img'
  }
})

// synchronizing databases
// Banner.sync({
//   force: true
// })

Banner.belongsTo(Product, {
  foreignKey: 'product_id',
  as: 'banner_product_info'
})

module.exports = Banner