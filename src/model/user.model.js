const {
  DataTypes
} = require('sequelize')

const seq = require('../db/seq')

// create user model
const User = seq.define('mi_user', {
  user_name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    comment: 'user name'
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: 'password'
  },
  is_admin: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: 0,
    comment: '是否为管理员:0 不是管理员(默认值)'
  }
})

// synchronizing databases
// User.sync({
//   force: true
// })

module.exports = User