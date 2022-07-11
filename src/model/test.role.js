const {
  DataTypes
} = require('sequelize')

const seq = require('../db/seq')

const Test_role = seq.define('role', {
  sku_id: {
    type: DataTypes.INTEGER,
  },
  b: {
    type: DataTypes.STRING,
  }
})

// synchronizing databases
// Test_role.sync({
//   force: true
// })


module.exports = Test_role