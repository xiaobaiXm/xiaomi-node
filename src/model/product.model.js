const {
  DataTypes
} = require('sequelize')

const seq = require('../db/seq')

// other models
const Sku = require('./sku.model')

// product model
const Product = seq.define('mi_product', {
  search_group_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    comment: 'product search group id',
  },
  product_sku_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: 'sku id',
    unique: false,
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
  sales: {
    type: DataTypes.DECIMAL(10),
    allowNull: true,
    comment: 'product sales',
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
  targetKey: 'sku_id',
  foreignKey: 'product_sku_id',
  unique: false
})

module.exports = Product