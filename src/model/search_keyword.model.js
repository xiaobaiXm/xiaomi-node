const {
  DataTypes
} = require('sequelize')

const seq = require('../db/seq')

// product model 
const Product = require('../model/product.model')

// search keyword model
const Search_keyword = seq.define('mi_search_keyword', {
  keyword: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: 'search keyword',
  },
  product_group_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    comment: 'product group id',
  }
})

// synchronizing databases
// Search_keyword.sync({
//   force: true
// })

// Search_keyword.belongsTo(Product, {
//   targetKey: 'search_group_id',
//   foreignKey: 'product_group_id',
//   as: 'search_product_keyword_id'
// })

module.exports = Search_keyword

const arr = [{
    keyword: '全部商品'
  },
  {
    keyword: '小米手机'
  },
  {
    keyword: '红米手机'
  },
  {
    keyword: '笔记本电脑'
  },
  {
    keyword: '智能穿戴'
  },
  {
    keyword: '耳机'
  },
  {
    keyword: '日用百货'
  },
  {
    keyword: '电视'
  },
  {
    keyword: '路由器'
  },
  {
    keyword: '平板'
  },
  {
    keyword: '黑鲨手机'
  },
  {
    keyword: '充电器'
  },
]

// Search_keyword.bulkCreate(arr)