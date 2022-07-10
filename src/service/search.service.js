const sequelize = require('sequelize')
const {
  Op
} = require('sequelize')
// other modes
const Search_keyword = require('../model/search_keyword.model')
const Product = require('../model/product.model')
const Sku = require('../model/sku.model')

// 连接 search 数据库
class SearchService {
  // search products
  async findSearchInfo(pageNo, pageSize, prams) {
    const {
      installment,
      promotion,
      available
    } = prams.filter_tag[0]
    const {
      count,
      rows
    } = await Product.findAndCountAll({
      attributes: ['id', 'name', 'subtitle'],
      where: {
        stock: {
          [Op.gte]: -1 ? available : 1
        },
        search_group_id: prams.keyword,
        [Op.and]: [{
          promotion
        }, {
          installment
        }]
      },
      order: [
        prams.order.model ? [prams.order.model, prams.order.field, prams.order.way] : [prams.order.field, prams.order.way]
      ],
      include: {
        model: Sku,
        attributes: {
          exclude: ['createdAt', 'updatedAt']
        },
        where: {
          search_is_check: true
        }
      },
      offset: (pageNo - 1) * pageSize,
      limit: pageSize * 1,
      distinct: true
    })
    const newArr = [...new Set(rows.map(item => item.name))]
    const list = []
    newArr.forEach(names => {
      list.push(rows.filter(item => item.name === names))
    })
    const data = []
    list.forEach((item, index) => {
      const arr = []
      item.forEach(items => {
        arr.push({
          info_id: items.mi_sku.id,
          price: items.mi_sku.price,
          oldPrice: items.mi_sku.old_price,
          img: items.mi_sku.img,
          version: items.mi_sku.version
        })
      })
      data.push({
        product_id: item[0].id,
        product_name: newArr[index],
        product_info: arr
      })
    })

    return {
      pageNo,
      pageSize,
      total: count,
      list: data
    }
  }

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