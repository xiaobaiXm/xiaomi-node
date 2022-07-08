const {
  DataTypes
} = require('sequelize')

const seq = require('../db/seq')

// product info model
const ProductInfo = seq.define('mi_product_info', {
  product_info_name: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: 'goods name',
  },
  product_info_desc: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: 'goods desc',
  },
  product_info_img: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: 'goods img',
  },
  product_info_price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    comment: 'goods price',
  },
  product_info_old_price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true,
    comment: 'goods old price',
  },
  product_info_chooseProduct: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: 'goods chooseProduct',
  },
  product_info_chooseVersion: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: 'goods chooseVersion',
  },
  product_info_chooseColor: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: 'goods chooseColor',
  },
}, {
  paranoid: true,
})

// synchronizing databases
ProductInfo.sync({
  force: true
})

module.exports = ProductInfo