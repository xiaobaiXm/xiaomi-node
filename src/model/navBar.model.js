const {
  DataTypes
} = require('sequelize')

const seq = require('../db/seq')

// create nav bar model
const NavBar = seq.define('mi_nav_bar', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: 'name'
  },
  path: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: 'path'
  }
})

// synchronizing databases
// NavBar.sync({
//   force: true
// })

module.exports = NavBar