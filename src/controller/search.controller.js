const {
  findSearch,
  getSearchKeyword
} = require('../service/search.service')

const {
  findSearchKeywordError
} = require('../constant/err.type')

class SearchController {
  // search products
  async findProduct(ctx) {
    const {
      keyword,
      props,
      order,
      pageNo = 1,
      pageSize = 20
    } = ctx.request.body

    ctx.body = {
      code: 200,
      message: '获取数据成功',
      data: {
        keyword,
        props,
        order,
        pageNo,
        pageSize
      }
    }
  }

  // get search keyword
  async findKeyword(ctx) {
    try {
      ctx.body = {
        code: 200,
        message: '获取keyword成功',
        data: await getSearchKeyword()
      }
    } catch (err) {
      console.error(err)
      return ctx.app.emit('error', findSearchKeywordError, ctx)
    }
  }
}

module.exports = new SearchController()