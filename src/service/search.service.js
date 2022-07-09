const {
  Op
} = require('sequelize')

// search models
const Search_keyword = require('../model/search_keyword.model')

// product and sku model
const Product = require('../model/product.model')
const Sku = require('../model/sku.model')

// 连接 search 数据库
class SearchService {
  // search products
  async findSearchInfo(pageNo, pageSize, prams) {
    const {
      count,
      rows
    } = await Product.findAndCountAll({
      attributes: ['id', 'name', 'subtitle'],
      where: {
        search_group_id: prams.keyword,
        [Op.and]: [{
          promotion: prams.filter_tag[0].promotion
        }, {
          installment: prams.filter_tag[0].installment
        }, ],
        // someAttribute: {
        //   [Op.gte]: 0
        // }
      },
      include: {
        model: Sku,
        where: {
          is_check: true
        }
        // as: 'product_info',
        //  attributes: ['id', 'name', 'price', 'main_image']
      },
      offset: (pageNo - 1) * pageSize,
      limit: pageSize * 1,
    })

    return {
      pageNo,
      pageSize,
      total: count,
      list: rows,
    }
  }


  /*  switch (prams.order) {
     case '1:desc':
       return 
     case '1:asc':
       return
     case '2:desc':
       ctx.request.body.order = ''
     case '2:asc':
       ctx.request.body.order = ''
   } */

  // get search keyword 
  async getSearchKeyword() {
    return await Search_keyword.findAll({
      attributes: ['id', 'keyword', 'product_group_id']
    })
  }

  // get keyword info 
  async getKeywordInfo(keyword) {
    const res = await Search_keyword.findOne({
      attributes: ['id'],
      where: {
        keyword
      }
    })
    return res ? res.dataValues : null
  }

}

module.exports = new SearchService()