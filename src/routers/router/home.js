const Router = require('koa-router')

const router = new Router({
  prefix: '/home'
})

// controller
const {
  getNavBar,
  getNav,
  getCategory,
  getBanner,
  getHeroBanner,
  getHeroList,
  getBigBanner,
  getPhone,
  getContainer,
  getHomeVideo,
  getVideo,
  getFooterHelp,
  getFooterNav
} = require('../../controller/home.controller')

router
  .get('/navBar', getNavBar)
  .get('/nav', getNav)
  .get('/category', getCategory)
  .get('/banner', getBanner)
  .get('/heroBanner', getHeroBanner)
  .get('/heroList', getHeroList)
  .get('/bigBanner', getBigBanner)
  .get('/phone', getPhone)
  .get('/container', getContainer)
  .get('/homeVideo', getHomeVideo)
  .get('/video', getVideo)
  .get('/footerHelp', getFooterHelp)
  .get('/footerNav', getFooterNav)

module.exports = router