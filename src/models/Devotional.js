const mongoose = require('mongoose')
const Schema = mongoose.Schema

const devotionalSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const Devotional = mongoose.model('Devotional', devotionalSchema)
module.exports = Devotional
