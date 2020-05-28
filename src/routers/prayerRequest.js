const express = require('express')
const PrayerRequest = require('../models/PrayerRequest')
const auth = require('../middleware/auth')

const router = express.Router()

router.get('/prayer-requests', auth, async (req, res) => {
  const prayerRequestsList = await PrayerRequest.find({})

  try {
    res.send(prayerRequestsList)
  } catch (err) {
    res.status(500).send(err)
  }
})

router.post('/prayer-requests', auth, async (req, res) => {
  const newPrayerRequest = await new PrayerRequest(req.body)

  try {
    await newPrayerRequest.save()

    res.send(newPrayerRequest)
  } catch (err) {
    res.status(500).send(err)
  }
})

router.delete('/prayer-requests/:id', auth, async (req, res) => {
  try {
    const prayerRequest = await PrayerRequest.findByIdAndDelete(req.params.id)

    res.sendStatus(200)
  } catch (err) {
    res.status(500).send(err)
  }
})

module.exports = router
