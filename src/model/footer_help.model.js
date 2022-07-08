const {
  DataTypes
} = require('sequelize')

const seq = require('../db/seq')

// create footer help model
const Footer_help = seq.define('mi_footer_help', {
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
// Footer_help.sync({
//   force: true
// })

module.exports = Footer_help