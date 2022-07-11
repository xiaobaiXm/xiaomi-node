// models
const NavBar = require('../model/navBar.model')
const Nav = require('../model/nav.model')
const Banner = require('../model/banner.model')
const Hero_banner = require('../model/hero_banner.model')
const Hero_list = require('../model/hero_list.model')

const Container = require('../model/container.model')
const Category = require('../model/category.model')

const Video = require('../model/video.model')
const Footer_help = require('../model/footer_help.model')
const Footer_nav = require('../model/footer_nav.model')

// product model
const Product = require('../model/product.model')

// 连接 models 数据库
class HomeService {
  async getNavBarInfo() {
    return await NavBar.findAll({
      attributes: ['id', 'name', 'path']
    })
  }

  async getNavInfo() {
    return
  }

  async getCategoryInfo() {
    const {
      rows
    } = await Category.findAndCountAll({
      attributes: ['id', 'cate_id', 'name'],
      include: {
        model: Product,
        attributes: ['id', 'name'],
        as: 'category_children',
      }
    })

    // const newArr = [...new Set(res.map(item => item.name))]
    // const list = []
    // newArr.forEach(names => {
    //   list.push(res.filter(item => item.name === names))
    // })

    return rows
  }

  async getBannerInfo() {
    return await Banner.findAll({
      attributes: ['id', 'product_id', 'img']
    })
  }

  async getHeroListInfo() {
    return await Hero_list.findAll({
      attributes: ['id', 'name', 'path', 'icon']
    })
  }

  async getHeroBannerInfo() {
    return await Hero_banner.findAll({
      attributes: ['id', 'product_id', 'img']
    })
  }

  async getContainerInfo() {

  }

  async getVideoInfo() {
    return await Video.findAll({
      attributes: ['id', 'title', 'img', 'desc', 'link']
    })
  }

  async getFooterHelpInfo() {
    return await Footer_help.findAll({
      attributes: ['id', 'name', 'path', 'icon']
    })
  }

  async getFooterNavInfo() {
    const res = await Footer_nav.findAll({
      attributes: ['id', 'name', 'path', 'group']
    })

    const newArr = [...new Set(res.map(item => item.group))]
    const list = []
    newArr.forEach(groups => {
      list.push(res.filter(item => item.group === groups))
    })
    return list
  }
}

module.exports = new HomeService()