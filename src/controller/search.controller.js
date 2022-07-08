const {
  findSearch
} = require('../service/search.service')

class SearchController {
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
}

module.exports = new SearchController()