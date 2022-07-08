const addCart = {
  product_id: 'number'
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