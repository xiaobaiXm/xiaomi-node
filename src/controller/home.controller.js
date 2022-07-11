const {
  getNavBarInfo,
  getNavInfo,
  getCategoryInfo,
  getBannerInfo,
  getContainerInfo,
  getVideoInfo,
  getHeroListInfo,
  getHeroBannerInfo,
  getFooterHelpInfo,
  getFooterNavInfo
} = require('../service/home.service')

const Test_user = require('../model/test.user')
const Test_role = require('../model/test.role')
const Test_user_role = require('../model/test.user_role')

class HomeController {
  async getNavBar(ctx) {
    ctx.body = {
      code: 200,
      message: 'ok',
      data: await getNavBarInfo()
    }
  }

  async getNav(ctx) {
    ctx.body = {
      code: 200,
      message: 'ok',
      data: await getNavInfo()
    }
  }

  async getCategory(ctx) {
    ctx.body = {
      code: 200,
      message: 'ok',
      data: await getCategoryInfo()
    }
  }

  async getBanner(ctx) {
    ctx.body = {
      code: 200,
      message: 'ok',
      data: await getBannerInfo()
    }
  }

  async getHeroBanner(ctx) {
    ctx.body = {
      code: 200,
      message: 'ok',
      data: await getHeroBannerInfo()
    }
  }

  async getHeroList(ctx) {
    ctx.body = {
      code: 200,
      message: 'ok',
      data: await getHeroListInfo()
    }
  }

  async getPhone(ctx) {
    ctx.body = {
      code: 200,
      message: 'ok',
      data: await getPhoneInfo()
    }
  }

  async getContainer(ctx) {
    ctx.body = {
      code: 200,
      message: 'ok',
      data: await getContainerInfo()
    }
  }

  async getVideo(ctx) {
    ctx.body = {
      code: 200,
      message: 'ok',
      data: await getVideoInfo()
    }
  }

  async getFooterHelp(ctx) {
    ctx.body = {
      code: 200,
      message: 'ok',
      data: await getFooterHelpInfo()
    }
  }

  async getFooterNav(ctx) {
    ctx.body = {
      code: 200,
      message: 'ok',
      data: await getFooterNavInfo()
    }
  }

  async test(ctx) {
    const users = await Test_user.findAll({
      include: [{
        model: Test_role
      }, ],
      // where: {
      //   id: 1
      // },
    })

    ctx.body = {
      users
    }
  }
}

module.exports = new HomeController()