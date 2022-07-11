// product model
const Product = require('../model/product.model')

// sku model
const Sku = require('../model/sku.model')

// other model 
const Guess_you_like = require('../model/guess_you_like.model')
const Cart_recommend = require('../model/cart_recommend.model')


// 连接 product 数据库
class ProductService {
  // get product inventory
  async findProductInventory(id) {
    const res = await Product.findOne({
      attributes: ['stock'],
      where: {
        id
      }
    })

    return res.stock > 0 ? true : false
  }

  // get product info
  async getProductInfo(id) {
    const res = await Product.findOne({
      where: {
        id
      }
    })

    return res ? res.dataValues : null
  }

  // get guess you like info
  async getGuessYouLike() {
    return await Guess_you_like.findAll({
      attributes: ['id', 'product_id', 'favorable_comment'],
      include: {
        model: Product,
        attributes: ['id', 'name', 'price', 'main_image'],
        as: 'product_info'
      }
    })
  }

  // get cart recommend info
  async getCartRecommendInfo() {
    return await Cart_recommend.findAll({
      attributes: ['id', 'product_id', 'favorable_comment'],
      include: {
        model: Product,
        attributes: ['id', 'name', 'price', 'main_image'],
        as: 'product_info'
      }
    })
  }

  async getAllProduct() {
    return await Product.findAll({
      attributes: ['id', 'name', 'desc', 'subtitle'],
      where: {
        category_id: 2
      },
      include: {
        model: Sku,
        // where: {
        //   is_check: true
        // }
        // as: 'product_info',
        //  attributes: ['id', 'name', 'price', 'main_image']
      }
    })

  }
}

module.exports = new ProductService()