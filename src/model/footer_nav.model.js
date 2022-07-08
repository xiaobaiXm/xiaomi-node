const {
  DataTypes
} = require('sequelize')

const seq = require('../db/seq')

// create footer_nav model
const Footer_nav = seq.define('mi_footer_nav', {
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
  group: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: 'group'
  }
})

// synchronizing databases
// Footer_nav.sync({
//   force: true
// })

module.exports = Footer_nav