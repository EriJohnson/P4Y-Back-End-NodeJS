const mongoose = require('mongoose')
const Schema = mongoose.Schema

const prayerRequestSchema = new Schema(
  {
    author: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const PrayerRequest = mongoose.model('PrayerRequest', prayerRequestSchema)

module.exports = PrayerRequest
