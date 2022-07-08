const {
  DataTypes
} = require('sequelize')

const seq = require('../db/seq')

// create hero list model
const Hero_list = seq.define('mi_hero_list', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: 'name'
  },
  path: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: 'path'
  },
  icon: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: 'icon'
  }
})

// synchronizing databases
// Hero_list.sync({
//   force: true
// })

module.exports = Hero_list