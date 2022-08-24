const {
  createAddress,
  findAllAddress,
  updateAddress,
  removeAddress,
  setDefaultAddress,
  getAllAddressInfo
} = require('../service/address.service')

const {
  addAllAddressError,
  findAllAddressInfoError,
  updateAddressInfoError,
  removeAddressError,
  setDefaultAddressError,
  getAllAddressError
} = require('../constant/err.type')

class AddressController {
  // add user address
  async create(ctx) {
    const user_id = ctx.state.user.id
    const {
      consignee,
      phone,
      provinces,
      city,
      area,
      address,
      address_detail,
      remarks
    } = ctx.request.body

    try {
      ctx.body = {
        code: 200,
        message: '添加地址成功',
        data: await createAddress({
          user_id,
          consignee,
          phone,
          provinces,
          city,
          area,
          address,
          address_detail,
          remarks
        })
      }
    } catch (err) {
      console.err(err)
      return ctx.app.emit('error', addAllAddressError, ctx)
    }
  }

  // find all user address
  async findAll(ctx) {
    const user_id = ctx.state.user.id
    const {
      pageNo = 1,
      pageSize = 4
    } = ctx.request.body

    console.log(user_id, pageNo, pageSize)
    try {
      ctx.body = {
        code: 200,
        message: '获取地址列表成功',
        data: await findAllAddress(user_id, pageNo, pageSize)
      }

    } catch (err) {
      console.err(err)
      return ctx.app.emit('error', findAllAddressInfoError, ctx)
    }
  }

  // update address
  async update(ctx) {
    const {
      id
    } = ctx.request.params
    try {
      ctx.body = {
        code: 200,
        message: '更新地址成功',
        data: await updateAddress(id, ctx.request.body)
      }
    } catch (err) {
      console.err(err)
      return ctx.app.emit('error', updateAddressInfoError, ctx)
    }
  }

  // remove address
  async remove(ctx) {
    const {
      id
    } = ctx.request.params

    try {
      ctx.body = {
        code: 200,
        message: '删除地址成功',
        data: await removeAddress(id)
      }
    } catch (err) {
      console.err(err)
      return ctx.app.emit('error', removeAddressError, ctx)
    }
  }

  // set default address
  async setDefault(ctx) {
    const user_id = ctx.state.user.id

    const {
      id
    } = ctx.request.params

    try {
      ctx.body = {
        code: 200,
        message: '设置默认地址成功',
        data: await setDefaultAddress(user_id, id)
      }
    } catch (err) {
      console.err(err)
      return ctx.app.emit('error', setDefaultAddressError, ctx)
    }
  }

  // get all address info
  async allAddressInfo(ctx) {
    try {
      ctx.body = {
        code: 200,
        message: '获取全部地址列表成功',
        data: await getAllAddressInfo()
      }
    } catch (err) {
      console.err(err)
      return ctx.app.emit('error', getAllAddressError, ctx)
    }
  }
}

module.exports = new AddressController()