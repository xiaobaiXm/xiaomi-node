const {
  DataTypes
} = require('sequelize')

const seq = require('../db/seq')

// create phone model
const Phone = seq.define('mi_phone', {
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    comment: 'container id'
  },
  container_title: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: 'container title'
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: 'name'
  },
  desc: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: 'description'
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: true,
    comment: 'price'
  },
  old_price: {
    type: DataTypes.INTEGER,
    allowNull: true,
    comment: 'old price'
  },
  img: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: 'img'
  },
  area: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: 'area'
  }
})

// synchronizing databases
// Phone.sync({
//   force: true
// })

module.exports = Phone