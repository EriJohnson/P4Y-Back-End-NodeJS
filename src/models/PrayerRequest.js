const mongoose = require('mongoose')

const prayerRequestSchema = new mongoose.Schema(
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
