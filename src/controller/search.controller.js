const {
  findSearchInfo,
  getSearchKeyword
} = require('../service/search.service')

const {
  findSearchKeywordError,
  searchError
} = require('../constant/err.type')

class SearchController {
  // search products
  async findProduct(ctx) {
    const {
      keyword,
      filter_tag,
      order,
      pageNo = 1,
      pageSize = 20
    } = ctx.request.body

    try {
      ctx.body = {
        code: 200,
        message: '获取搜索列表成功',
        data: await findSearchInfo(pageNo, pageSize, {
          keyword,
          filter_tag,
          order,
        })
      }
    } catch (err) {
      console.error(err)
      return ctx.app.emit('error', searchError, ctx)
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