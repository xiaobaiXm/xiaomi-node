const {
  DataTypes
} = require('sequelize')

const seq = require('../db/seq')

// create address model
const Address = seq.define('mi_address', {
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: 'user id'
  },
  consignee: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: 'consignee'
  },
  phone: {
    type: DataTypes.CHAR(11),
    allowNull: false,
    comment: 'phone'
  },
  provinces: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: 'provinces'
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: 'city'
  },
  area: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: 'area'
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: 'address'
  },
  address_detail: {
    type: DataTypes.STRING,
    allowNull: false,
    commit: 'address detail'
  },
  remarks: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: 'remarks'
  },
  is_default: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
    comment: '是否为默认地址 0:否(默认值) 1:是'
  }
})

// synchronizing databases
// Address.sync({
//   force: true
// })

module.exports = Address