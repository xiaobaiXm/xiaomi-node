const {
  DataTypes
} = require('sequelize')

const seq = require('../db/seq')

// sku model
const Sku = require('./sku.model')

// product model
const Product = seq.define('mi_product', {
  nav_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    comment: 'product nav id',
  },
  category_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    comment: 'product category id',
  },
  container_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    comment: 'product container id',
  },
  search_group_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    comment: 'product search group id',
  },
  sku_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    comment: 'spu id',
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: 'product name',
  },
  subtitle: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: 'product subtitle',
  },
  desc: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: 'product description',
  },
  sale_icons: {
    type: DataTypes.TEXT,
    allowNull: true,
    comment: 'product sale icons imgs',
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 20,
    comment: 'product inventory',
  },
  promotion: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
    comment: 'product promotion',
  },
  installment: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
    comment: 'product installment',
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

Product.belongsTo(Sku, {
  targetKey: 'spu_id',
  foreignKey: 'sku_id',
  // as: 'product_spu_id'
})

module.exports = Product