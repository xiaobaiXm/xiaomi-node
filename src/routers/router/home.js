const Router = require('koa-router')

const router = new Router({
  prefix: '/home'
})

// controller
const {
  getNavBar,
  getNav,
  getBanner,
  getHeroBanner,
  getHeroList,
  getPhone,
  getContainer,
  getVideo,
  getFooterHelp,
  getFooterNav
} = require('../../controller/home.controller')

router
  .get('/navBar', getNavBar)
  .get('/nav', getNav)
  .get('/banner', getBanner)
  .get('/heroBanner', getHeroBanner)
  .get('/heroList', getHeroList)
  .get('/phone', getPhone)
  .get('/container', getContainer)
  .get('/video', getVideo)
  .get('/footerHelp', getFooterHelp)
  .get('/footerNav', getFooterNav)

module.exports = router