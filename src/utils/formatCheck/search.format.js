const findType = {
  keyword: {
    type: 'string',
    required: true
  },
  order: {
    type: 'string',
    required: false
  },
  filterTag: {
    type: 'array',
    required: false
  },
  pageNo: {
    type: 'number',
    required: false
  },
  pageSize: {
    type: 'number',
    required: false
  }
}

module.exports = {
  findType
}