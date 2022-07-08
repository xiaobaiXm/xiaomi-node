module.exports = {
  userFormateError: {
    code: 1001,
    message: '用户名或密码为空',
    data: null
  },
  userAlreadyExists: {
    code: 1002,
    message: '该用户名已存在',
    data: null
  },
  userRegisterError: {
    code: 1003,
    message: '用户注册失败',
    data: null
  },
  userDoesNotExist: {
    code: 1004,
    message: '用户名不存在',
    data: null
  },
  userLoginError: {
    code: 1005,
    message: '登录失败',
    data: null
  },
  invalidPassword: {
    code: 1006,
    message: '用户名或密码错误',
    data: null
  },
  changePasswordError: {
    code: 1007,
    message: '密码更新失败',
    data: null
  },
  tokenExpiredError: {
    code: 10101,
    message: 'token已过期',
    data: null
  },
  invalidToken: {
    code: 10102,
    message: '无效的token',
    data: null
  },
  invalidProductID: {
    code: 10201,
    message: '无效的商品id',
    data: null
  },
  productNotAvailable: {
    code: 10202,
    message: '该商品无货',
    data: null
  },
  addShopCartError: {
    code: 10203,
    message: '添加商品失败',
    data: null
  },
  findAllShopCartError: {
    code: 10204,
    message: '获取购物车失败',
    data: null
  },
  updateShopCartError: {
    code: 10205,
    message: '更新购物车失败',
    data: null
  },
  cartFormatError: {
    code: 10301,
    message: '购物车参数数据格式错误',
    data: null
  },
  addressFormatError: {
    code: 10401,
    message: '地址参数数据格式错误',
    data: null
  },
  addAllAddressError: {
    code: 10402,
    message: '获取地址信息失败',
    data: null
  },
  findAllAddressInfoError: {
    code: 10403,
    message: '获取地址列表失败',
    data: null
  },
  updateAddressInfoError: {
    code: 10404,
    message: '更新地址信息失败',
    data: null
  },
  removeAddressError: {
    code: 10405,
    message: '删除用户地址失败',
    data: null
  },
  setDefaultAddressError: {
    code: 10406,
    message: '设置默认地址失败',
    data: null
  },
  getAllAddressError: {
    code: 10407,
    message: '获取全部地址列表失败',
    data: null
  },
  orderFormatError: {
    code: 10501,
    message: '订单参数数据格式错误',
    data: null
  },
  searchFormatError: {
    code: 10601,
    message: '搜索页参数数据格式错误',
    data: null
  },
  productFormatError: {
    code: 10701,
    message: '商品参数数据格式错误',
    data: null
  },
  collectionFormatError: {
    code: 10801,
    message: '收藏参数数据格式错误',
    data: null
  },
  addCollectionError: {
    code: 10802,
    message: '添加收藏失败',
    data: null
  },
  removeCollectionError: {
    code: 10803,
    message: '删除收藏商品失败',
    data: null
  }
}