const {
  getNavBarInfo,
  getNavInfo,
  getCategoryInfo,
  getBannerInfo,
  getBigBannerInfo,
  getPhoneInfo,
  getContainerInfo,
  getHomeVideoInfo,
  getVideoInfo,
  getHeroListInfo,
  getHeroBannerInfo,
  getFooterHelpInfo,
  getFooterNavInfo
} = require('../service/home.service')

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

  async getBigBanner(ctx) {
    ctx.body = {
      code: 200,
      message: 'ok',
      data: await getBigBannerInfo()
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

  async getHomeVideo(ctx) {
    ctx.body = {
      code: 200,
      message: 'ok',
      data: await getHomeVideoInfo()
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
}

module.exports = new HomeController()