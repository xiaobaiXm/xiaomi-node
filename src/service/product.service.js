// product model
const Product = require('../model/product.model')

// 连接 product 数据库
class ProductService {
  async findProductInventory(id) {
    const res = await Product.findOne({
      attributes: ['stock'],
      where: {
        id
      }
    })

    return res.stock > 0 ? true : false
  }

  async getProductInfo(id) {
    const res = await Product.findOne({
      where: {
        id
      }
    })

    return res ? res.dataValues : null
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