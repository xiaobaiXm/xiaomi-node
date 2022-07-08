// collection model 
const Collection = require('../model/collection.model')

// product model
const Product = require('../model/product.model')

// 连接 collection 数据库
class CollectionService {
  async addCollection(user_id, product_id) {
    return await Collection.create({
      user_id,
      product_id
    })
  }

  async findAllCollection(user_id) {
    const {
      rows
    } = await Collection.findAndCountAll({
      attributes: ['id'],
      where: {
        user_id
      },
      include: {
        model: Product,
        as: 'collection_product_info',
        attributes: ['id', 'name', 'price', 'main_image']
      }
    })
    console.log('rows', rows)
    const message = rows.length <= 0 ? '该用户没有收藏商品' : '获取收藏列表成功'

    return {
      message,
      data: rows
    }
  }

  async delCollection(id) {
    return await Collection.destroy({
      where: {
        id
      }
    })
  }
}

module.exports = new CollectionService()