const createOrder = {
  address_id: 'int',
  product_info: 'string',
  freight: 'number',
  total: 'number',
  totalPrice: 'number'
}

const updateOrder = {
  status: 'number'
}

module.exports = {
  createOrder,
  updateOrder
}