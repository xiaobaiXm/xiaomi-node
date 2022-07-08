const {
  DataTypes
} = require('sequelize')

const seq = require('../db/seq')

const Product = require('./product.model')

// create nav model
const Container = seq.define('mi_container', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: 'nav name'
  }
})

// synchronizing databases
// Container.sync({
//   force: true
// })

// Container.belongsTo(Product, {
//   foreignKey: 'id',
//   as: 'container_id'
// })

module.exports = Container