const fs = require('fs')
const path = require('path')

const Router = require('koa-router')
const router = new Router()

// management router
let pathUrl = path.join(__dirname, 'router')

fs.readdirSync(pathUrl).forEach(file => {
  let r = require('./router/' + file)
  router.use(r.routes())
})

module.exports = router