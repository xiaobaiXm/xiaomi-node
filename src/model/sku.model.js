const {
  DataTypes
} = require('sequelize')

const seq = require('../db/seq')

// product model
const Sku = seq.define('mi_sku', {
  spu_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    comment: 'spu id'
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: true,
    comment: 'price'
  },
  old_price: {
    type: DataTypes.INTEGER,
    allowNull: true,
    comment: 'old price'
  },
  img: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: 'image'
  },
  version: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: 'version'
  },
  color: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: 'color'
  },
  is_check: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
    comment: 'is check'
  }
})

// synchronizing databases
// Sku.sync({
//   force: true
// })

module.exports = Sku