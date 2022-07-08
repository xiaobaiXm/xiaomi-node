const findType = {
  keyword: {
    type: 'string',
    required: true
  },
  props: {
    type: Array,
    required: false
  },
  order: {
    type: 'string',
    required: false
  },
  filter_tag: {
    type: 'string',
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