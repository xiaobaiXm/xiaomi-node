const {
  DataTypes
} = require('sequelize')

const seq = require('../db/seq')

// create big banner model
const Big_banner = seq.define('mi_big_banner', {
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    comment: 'big banner product id'
  },
  img: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: 'big banner img'
  }
})

// synchronizing databases
// Big_banner.sync({
//   force: true
// })

module.exports = Big_banner