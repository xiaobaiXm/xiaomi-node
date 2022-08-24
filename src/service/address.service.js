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
  async findAllAddress(user_id, pageNo, pageSize) {
    const {
      rows,
      count
    } = await Address.findAndCountAll({
      attributes: {
        exclude: ['user_id', 'createdAt', 'updatedAt']
      },
      where: {
        user_id
      },
      offset: (pageNo - 1) * pageSize,
      limit: pageSize * 1,
    })
    return {
      pageNo,
      pageSize,
      total: count,
      list: rows
    }
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
    return await Address_info.findAll({
      attributes: {
        exclude: ['pinyin_prefix', 'pinyin', 'ext_ie', 'ext_name', 'createdAt', 'updatedAt']
      }
    })
  }
}

module.exports = new AddressService()