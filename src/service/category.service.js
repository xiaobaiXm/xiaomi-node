// category model
const Category = require('../model/category.model')

// 连接 category 数据库
class CategoryService {

}

module.exports = new CategoryService()

// let arr = ["手机",
//   "电视",
//   "笔记本 平板",
//   "出行 穿戴",
//   "耳机 音箱",
//   "家电",
//   "智能 路由器",
//   "电源 配件",
//   "健康 儿童",
//   "生活 箱包"
// ]

// async function a() {
//   arr.forEach((item, index) => {
//     Category.create({
//       name: item
//     })
//   })
//   console.log('ok')
// }

// a()