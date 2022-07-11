const {
  DataTypes
} = require('sequelize')

const seq = require('../db/seq')

const Test_user = require('./test.user')
const Test_role = require('./test.role')

const Test_user_role = seq.define('user_role', {
  category_id: {
    type: DataTypes.INTEGER,
  },
  product_sku_id: {
    type: DataTypes.INTEGER,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  desc: {
    type: DataTypes.STRING,
    allowNull: true,
  }
})

// synchronizing databases
// Test_user_role.sync({
//   force: true
// })


Test_user.belongsToMany(Test_role, {
  through: Test_user_role,
  foreignKey: 'category_id',
  otherKey: 'cate_id',
  // targetKey: 'cate_id',
})


Test_role.belongsToMany(Test_user, {
  through: Test_user_role,
  foreignKey: 'product_sku_id',
  otherKey: 'sku_id',
})


module.exports = Test_user_role