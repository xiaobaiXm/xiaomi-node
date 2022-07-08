// user model
const User = require('../model/user.model')

// 连接 user 数据库
class UserService {
  // register
  async createUser(user_name, password) {
    const res = await User.create({
      user_name,
      password
    })
    return res.dataValues
  }

  // get user info 
  async getUserInfo({
    id,
    user_name,
    password,
    is_admin
  }) {
    const whereOpt = {}

    id && Object.assign(whereOpt, {
      id
    })
    user_name && Object.assign(whereOpt, {
      user_name
    })
    password && Object.assign(whereOpt, {
      password
    })
    is_admin && Object.assign(whereOpt, {
      is_admin
    })

    const res = await User.findOne({
      attributes: ['id', 'user_name', 'password', 'is_admin'],
      where: whereOpt,
    })

    return res ? res.dataValues : null
  }

  // update user info
  async updateUserInfoById({
    id,
    user_name,
    password,
    is_admin
  }) {
    const where = {
      id
    }
    const newUser = {}
    user_name && Object.assign(newUser, {
      user_name
    })
    password && Object.assign(newUser, {
      password
    })
    is_admin && Object.assign(newUser, {
      is_admin
    })

    const res = await User.update(newUser, {
      where
    })

    return res[0] == 1 ? true : false
  }
}

module.exports = new UserService()