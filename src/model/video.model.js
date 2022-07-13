const {
  DataTypes
} = require('sequelize')

const seq = require('../db/seq')

// create video model
const Video = seq.define('mi_video', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: 'name'
  },
  desc: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: 'desc'
  },
  img: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: 'img'
  },
  link: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: 'video link'
  }
})

// synchronizing databases
// Video.sync({
//   force: true
// })

module.exports = Video