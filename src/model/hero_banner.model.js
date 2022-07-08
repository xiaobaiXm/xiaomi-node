const {
  DataTypes
} = require('sequelize')

const seq = require('../db/seq')

// product model
const Product = require('./product.model')

// create hero banner model
const Hero_banner = seq.define('mi_hero_banner', {
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
// Hero_banner.sync({
//   force: true
// })

Hero_banner.belongsTo(Product, {
  foreignKey: 'product_id',
  as: 'hero_banner_product_info'
})

module.exports = Hero_banner