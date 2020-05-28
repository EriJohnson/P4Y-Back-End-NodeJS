const jwt = require('jsonwebtoken')
const User = require('../models/User')
const { promisify } = require('util')

const auth = async (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '')
  try {
    await promisify(jwt.verify)(token, process.env.JWT_KEY)

    next()
  } catch (err) {
    return res.sendStatus(401).send(err)
  }
}
module.exports = auth
