const {
  addCollection,
  findAllCollection,
  delCollection
} = require('../service/collection.service')

// err info
const {
  addCollectionError,
  removeCollectionError
} = require('../constant/err.type')
const cartService = require('../service/cart.service')

class CollectionController {
  async add(ctx) {
    const user_id = ctx.state.user.id
    const {
      product_id
    } = ctx.request.body

    try {
      ctx.body = {
        code: 200,
        message: '添加收藏成功',
        data: await addCollection(user_id, product_id)
      }
    } catch (err) {
      console.error(err)
      return ctx.app.emit('error', addCollectionError, ctx)
    }
  }

  async findAll(ctx) {
    const user_id = ctx.state.user.id

    const {
      message,
      data
    } = await findAllCollection(user_id)

    ctx.body = {
      code: 200,
      message,
      data
    }
  }

  async del(ctx) {
    const {
      id
    } = ctx.request.body

    try {
      ctx.body = {
        code: 200,
        message: '删除收藏商品成功',
        data: await delCollection(id)
      }
    } catch (err) {
      console.error(err)
      return ctx.app.emit('error', removeCollectionError, ctx)
    }
  }
}

module.exports = new CollectionController()