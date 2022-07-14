// models
const NavBar = require('../model/navBar.model')
const Nav = require('../model/nav.model')
const Banner = require('../model/banner.model')
const Hero_banner = require('../model/hero_banner.model')
const Hero_list = require('../model/hero_list.model')
const Big_banner = require('../model/big_banner.model')

const Phone = require('../model/phone.model')
const Container = require('../model/container.model')
const Category = require('../model/category.model')

const Video = require('../model/video.model')
const Footer_help = require('../model/footer_help.model')
const Footer_nav = require('../model/footer_nav.model')

const Product = require('../model/product.model')

const Sku = require('../model/sku.model')

// 连接 models 数据库
class HomeService {
  async getNavBarInfo() {
    return await NavBar.findAll({
      attributes: ['id', 'name', 'path']
    })
  }

  async getNavInfo() {
    const res = await Nav.findAll({
      attributes: {
        exclude: ['createdAt', 'updatedAt']
      }
    })
    const newArr = [...new Set(res.map(item => item.group))]
    const list = []
    newArr.forEach(groups => {
      list.push(res.filter(item => item.group === groups))
    })
    let data = []
    list.forEach((item, index) => {
      let arr = []
      item.forEach(its => {
        arr.push({
          id: its.id,
          product_id: its.product_id,
          name: its.name,
          price: its.price,
          img: its.img,
        })
      })
      data.push({
        navTitle: newArr[index],
        navChildren: arr
      })
    })
    return data
  }

  async getCategoryInfo() {
    const res = await Category.findAll({
      attributes: {
        exclude: ['createdAt', 'updatedAt']
      }
    })
    const newArr = [...new Set(res.map(item => item.group))]
    const list = []
    newArr.forEach(groups => {
      list.push(res.filter(item => item.group === groups))
    })
    let data = []
    list.forEach((item, index) => {
      let arr = []
      item.forEach(its => {
        arr.push(its)
      })
      data.push({
        categoryTitle: newArr[index],
        categoryChild: arr
      })
    })
    return data
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

  async getBigBannerInfo() {
    return await Big_banner.findAll({
      attributes: ['id', 'product_id', 'img']
    })
  }

  async getPhoneInfo() {
    const res = await Phone.findAll({
      attributes: {
        exclude: ['createdAt', 'updatedAt']
      }
    })
    const newArr = [...new Set(res.map(item => item.area))]
    const list = []
    newArr.forEach(areas => {
      list.push(res.filter(item => item.area === areas))
    })
    let data = []
    list.forEach((item, index) => {
      let arr = []
      item.forEach(its => {
        arr.push({
          id: its.id,
          productId: its.product_id,
          name: its.name,
          desc: its.desc,
          price: its.price,
          oldPrice: its.old_price,
          img: its.img,
        })
      })
      data.push({
        phoneArea: newArr[index],
        phoneChild: arr
      })
    })
    return data
  }

  async getContainerInfo() {
    const result = await Container.findAll({
      attributes: {
        exclude: ['createdAt', 'updatedAt']
      }
    })
    let newArr = [...new Set(result.map(item => item.container_title))]
    let list = []
    newArr.forEach(names => {
      list.push(result.filter(item => item.container_title === names))
    })
    let data = []
    list.forEach((item, index) => {
      let arr = []
      item.forEach(its => {
        arr.push(its)
      })
      data.push({
        containerTitle: newArr[index],
        containerChild: arr
      })
    })
    for (let i = 0; i < list.length; i++) {
      let map = new Map()
      let newArr = []
      list[i].forEach(item => {
        map.has(item.area) ? map.get(item.area).push(item) : map.set(item.area, [item])
      })
      newArr = [...map.values()]
      data[i].containerChild = {
        left: newArr[1],
        right: newArr[0]
      }
      let newArr1 = [...new Set(data[i].containerChild.right.map(item => item.group))]
      let li = []
      newArr1.forEach(names => {
        li.push(data[i].containerChild.right.filter(item => item.group === names))
      })
      let data1 = []
      li.forEach((item, index) => {
        let arr = []
        let mini = []
        item.forEach(its => {
          if (its.mini == false) {
            arr.push({
              id: its.id,
              productId: its.product_id,
              name: its.name,
              desc: its.desc,
              price: its.price,
              oldPrice: its.old_price,
              img: its.img,
            })
          } else {
            mini.push({
              id: its.id,
              productId: its.product_id,
              name: its.name,
              price: its.price,
              img: its.img,
            })
          }
        })
        data1.push({
          groupTitle: item[index].group,
          groupChildren: arr,
          groupMini: mini
        })
      })
      data[i].containerChild.right = data1
    }
    return data
  }

  async getHomeVideoInfo() {
    return await Video.findAll({
      attributes: ['id', 'title', 'img', 'desc', 'link'],
      where: {
        id: [1, 2, 3, 4]
      }
    })
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
    let data = []
    list.forEach((item, index) => {
      let arr = []
      item.forEach(its => {
        arr.push({
          id: its.id,
          name: its.name,
          path: its.path
        })
      })
      data.push({
        footerNavDt: newArr[index],
        footerNavDd: arr
      })
    })
    return data
  }
}

module.exports = new HomeService()