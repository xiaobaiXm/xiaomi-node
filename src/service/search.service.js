// search models
const Search_keyword = require('../model/search_keyword.model')

// product model
const Product = require('../model/product.model')

// 连接 search 数据库
class SearchService {
  // search products
  async findSearch(prams) {

  }

  // get search keyword 
  async getSearchKeyword() {
    return await Search_keyword.findAll({
      attributes: ['id', 'keyword', 'product_group_id']
    })
  }
}

module.exports = new SearchService()