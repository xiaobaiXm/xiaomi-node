// product model
const Product = require('../model/product.model')

// other model 
const Guess_you_like = require('../model/guess_you_like.model')

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
}

module.exports = new ProductService()

/* const arr = [{
  category_id: 2,
  name: '小米',
  subtitle: '小米',
  main_image: '小米',
  sub_images: '小米',
  price: '小米',
  old_price: '小米',
  detail: '小米'
}]

async function a() {
  arr.forEach((item, index) => {
    Product.create({
      name: item
    })
  })
}

a() */