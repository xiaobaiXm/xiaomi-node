const addCart = {
  productId: 'number',
  cartSkuId: 'number'
}

const updateCart = {
  number: {
    type: 'number',
    required: false
  },
  selected: {
    type: 'bool',
    required: false
  }
}

const removeCart = {
  ids: 'array'
}

module.exports = {
  addCart,
  updateCart,
  removeCart
}