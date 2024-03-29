const {
  DataTypes
} = require('sequelize')

const seq = require('../db/seq')

// create container model
const Container = seq.define('mi_container', {
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
  group: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: 'group'
  },
  area: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'right',
    comment: 'area'
  },
  mini: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
    comment: 'mini'
  }
})

// synchronizing databases
// Container.sync({
//   force: true
// })

module.exports = Container