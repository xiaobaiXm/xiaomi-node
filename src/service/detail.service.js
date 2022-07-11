// other modela
const Product = require('../model/product.model')
const Sku = require('../model/sku.model')

// 连接 models 数据库
class DetailService {
  async getProductDetail(id) {
    const res = await Product.findAll({
      attributes: ['id', 'name'],
      where: {
        id
      },
      include: {
        model: Sku,
        attributes: ['sku_id', 'price', 'old_price', 'color', 'version']
      }
    })

    return res
  }
}

module.exports = new DetailService()