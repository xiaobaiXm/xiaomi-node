const {
  DataTypes
} = require('sequelize')

const seq = require('../db/seq')

// other models
const Product = require('./product.model')

// create category model
const Category = seq.define('mi_category', {
  cate_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    comment: 'category id'
  },
  category_is_check: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
    comment: 'category is check'
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: 'category name'
  }
})

// synchronizing databases
// Category.sync({
//   force: true
// })

Category.belongsTo(Product, {
  targetKey: 'category_id',
  foreignKey: 'cate_id',
  as: 'category_children'
})


const arr = [{
    name: '手机'
  },
  {
    name: '电视'
  },
  {
    name: '笔记本平板'
  },
  {
    name: '出行穿戴'
  },
  {
    name: '耳机音箱'
  },
  {
    name: '家电'
  },
  {
    name: '智能路由器'
  },
  {
    name: '电源配件'
  },
  {
    name: '健康儿童'
  },
  {
    name: '生活箱包'
  },
]

// Category.bulkCreate(arr)

module.exports = Category