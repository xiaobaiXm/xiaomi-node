const {
  DataTypes
} = require('sequelize')

const seq = require('../db/seq')

// create detail model
const Detail = seq.define('mi_detail', {

})

// synchronizing databases
// Detail.sync({
//   force: true
// })

module.exports = Detail