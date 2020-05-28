const express = require('express')
const User = require('../models/User')

const router = express.Router()

router.post('/users', async (req, res) => {
  const { name, password } = req.body
  try {
    const user = new User({ name, password })
    await user.save()
    res.status(201).send({ user })
  } catch (error) {
    res.status(400).send(error)
  }
})

router.post('/users/login', async (req, res) => {
  try {
    const { name, password } = req.body
    const user = await User.findByCredentials(name, password)
    const token = await user.generateAuthToken()
    res.send({ user, token })
  } catch (error) {
    res.sendStatus(401)
  }
})

module.exports = router
