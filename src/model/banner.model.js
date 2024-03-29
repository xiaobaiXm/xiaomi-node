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
    allowNull: true,
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


module.exports = Banner