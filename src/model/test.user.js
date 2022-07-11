const {
  DataTypes
} = require('sequelize')

const seq = require('../db/seq')

const Test_user = seq.define('user', {
  cate_id: {
    type: DataTypes.INTEGER,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true,
  }
})

// synchronizing databases
// Test_user.sync({
//   force: true
// })


module.exports = Test_user