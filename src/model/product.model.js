const {
  DataTypes
} = require('sequelize')

const seq = require('../db/seq')

// product model
const Product = seq.define('mi_product', {
  category_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: 'product category id',
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: 'product name',
  },
  subtitle: {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: 'product subtitle',
  },
  main_image: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: 'product img',
  },
  sub_images: {
    type: DataTypes.TEXT,
    allowNull: false,
    comment: 'product sub imgs',
  },
  price: {
    type: DataTypes.DECIMAL(10),
    allowNull: false,
    comment: 'product price',
  },
  old_price: {
    type: DataTypes.DECIMAL(10),
    allowNull: true,
    comment: 'product old price',
  },
  detail: {
    type: DataTypes.TEXT,
    allowNull: false,
    comment: 'product detail',
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 20,
    comment: 'product inventory',
  },
  status: {
    type: DataTypes.TINYINT,
    allowNull: false,
    defaultValue: 1,
    comment: 'product status 商品状态.1-在售(默认) 2-下架 3-删除',
  }
})

// synchronizing databases
// Product.sync({
//   force: true
// })

module.exports = Product