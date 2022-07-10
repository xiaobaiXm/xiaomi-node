const {
  Op
} = require('sequelize')

// cart model 
const Cart = require('../model/cart.model')

// other model
const Product = require('../model/product.model')
const Sku = require('../model/sku.model')

// 连接 cart 数据库
class CartService {
  async createOrUpdate(user_id, product_id, cart_sku_id) {
    const res = await Cart.findOne({
      where: {
        [Op.and]: {
          user_id,
          product_id,
          cart_sku_id
        }
      }
    })
    if (res) {
      await res.increment('number')
      return await res.reload()
    } else {
      return await Cart.create({
        user_id,
        product_id,
        cart_sku_id
      })
    }
  }

  async findCartsAll(user_id) {
    const {
      rows
    } = await Cart.findAndCountAll({
      attributes: ['id', 'number', 'selected'],
      where: {
        user_id
      },
      include: [{
          model: Product,
          as: 'cart_product_info',
          attributes: ['id', 'name'],
        },
        // {
        // module: Sku,
        // as: 'cart_sku_info',
        // attributes: ['price', 'version', 'color'],
        // }
      ]
    })

    return {
      list: rows
    }
  }

  async updateCarts(params) {
    const {
      id,
      number,
      selected
    } = params

    const res = await Cart.findByPk(id)

    if (!res) return

    number !== undefined ? (res.number = number) : ''
    selected !== undefined ? (res.selected = selected) : ''

    return await res.save()
  }

  async removeCarts(ids) {
    return Cart.destroy({
      where: {
        id: {
          [Op.in]: ids
        }
      }
    })
  }

  async selectAllCarts(user_id, selected) {
    return await Cart.update({
      selected
    }, {
      where: {
        user_id
      }
    })
  }

  async getUserCartsCountInfo(user_id) {
    return await Cart.count({
      where: {
        user_id
      }
    })
  }
}

module.exports = new CartService()