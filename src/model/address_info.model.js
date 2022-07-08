const {
  DataTypes
} = require('sequelize')

const seq = require('../db/seq')

// create address_info model
const Address_info = seq.define('mi_address_info', {
  pid: {
    type: DataTypes.DOUBLE,
    allowNull: false,
    comment: 'pid'
  },
  deep: {
    type: DataTypes.DOUBLE,
    allowNull: false,
    comment: 'deep'
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: 'name'
  },
  pinyin_prefix: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: 'name'
  },
  pinyin: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: 'name'
  },
  ext_id: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: 'ext_id'
  },
  ext_name: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: 'ext_name'
  }
})

// synchronizing databases
// Address_info.sync({
//   force: true
// })

module.exports = Address_info