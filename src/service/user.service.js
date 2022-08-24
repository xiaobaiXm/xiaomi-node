// user model
const User = require('../model/user.model')

// 连接 user 数据库
class UserService {
  // register
  async createUser(username, password) {
    const res = await User.create({
      username,
      password
    })
    return res.dataValues
  }

  // get user info 
  async getUserInfo({
    id,
    username,
    password,
    is_admin
  }) {
    const whereOpt = {}

    id && Object.assign(whereOpt, {
      id
    })
    username && Object.assign(whereOpt, {
      username
    })
    password && Object.assign(whereOpt, {
      password
    })
    is_admin && Object.assign(whereOpt, {
      is_admin
    })

    const res = await User.findOne({
      attributes: ['id', 'username', 'password'],
      where: whereOpt,
    })

    return res ? res.dataValues : null
  }

  // update user info
  async updateUserInfoById({
    id,
    username,
    password,
    is_admin
  }) {
    const where = {
      id
    }
    const newUser = {}
    username && Object.assign(newUser, {
      username
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