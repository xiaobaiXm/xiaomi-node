const createOrUpdateAddress = {
  consignee: 'string',
  phone: {
    type: 'string',
    format: /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
  },
  provinces: 'string',
  city: 'string',
  area: 'string',
  address: 'string',
  address_detail: 'string',
  remarks: {
    type: 'string',
    required: false
  }
}

const findAllAddress = {
  pageNo: {
    type: 'number',
    required: false
  },
  pageSize:  {
    type: 'number',
    required: false
  },
}

module.exports = {
  createOrUpdateAddress,
  findAllAddress
}