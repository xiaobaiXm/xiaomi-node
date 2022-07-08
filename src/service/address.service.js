// address model 
const Address = require('../model/address.model')

// address info model
const Address_info = require('../model/address_info.model')

// 连接 address 数据库
class AddressService {
  // add user address
  async createAddress(addressInfo) {
    return await Address.create(addressInfo)
  }

  // find all user address
  async findAllAddress(user_id) {
    return await Address.findAll({
      attributes: {
        exclude: ['user_id', 'createdAt', 'updatedAt']
      },
      where: {
        user_id
      }
    })
  }

  // update address
  async updateAddress(id, addressInfo) {
    console.log(id)
    console.log(addressInfo)
    return await Address.update(addressInfo, {
      where: {
        id
      }
    })
  }

  // remove address
  async removeAddress(id) {
    return await Address.destroy({
      where: {
        id
      }
    })
  }

  // set default address
  async setDefaultAddress(user_id, id) {
    await Address.update({
      is_default: false
    }, {
      where: {
        user_id
      }
    })

    return await Address.update({
      is_default: true
    }, {
      where: {
        id
      }
    })
  }

  // get all address info
  async getAllAddressInfo() {
    const res = await Address_info.findAll({
      attributes: {
        exclude: ['pinyin_prefix', 'pinyin', 'createdAt', 'updatedAt']
      }
    })

    const map = res.reduce((pre, cur) => {
      pre[cur.id] = cur
      cur.children = []
      return pre
    }, {})

    const result = res.filter(item => {
      if (map[item.pid]) {
        map[item.pid].children.push(item)
      }
      return item.deep == 0
    })

    return result
  }
}

module.exports = new AddressService()