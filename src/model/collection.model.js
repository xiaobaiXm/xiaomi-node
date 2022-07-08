const {
  DataTypes
} = require('sequelize')

const seq = require('../db/seq')

// product model
const Product = require('./product.model')

// create collection model
const Collection = seq.define('mi_collection', {
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: 'goods id'
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: 'user id'
  }
})

// synchronizing databases
// Collection.sync({
//   force: true
// })

Collection.belongsTo(Product, {
  foreignKey: 'product_id',
  as: 'collection_product_info'
})

module.exports = Collection