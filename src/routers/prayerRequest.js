const express = require('express')
const PrayerRequest = require('../models/PrayerRequest')
const auth = require('../middleware/auth')

const router = express.Router()

router.get('/prayer-requests', auth, (req, res) => {
  PrayerRequest.find({})
    .then(prayerRequest => {
      return res.json(prayerRequest)
    })
    .catch(erro => {
      return res.status(400).json({
        error: true,
        message: 'Nenhum pedido de oração encontrado!',
      })
    })
})

router.get('/prayer-requests/:id', auth, (req, res) => {
  PrayerRequest.findOne({ _id: req.params.id })
    .then(prayerRequest => {
      return res.json(prayerRequest)
    })
    .catch(erro => {
      return res.status(400).json({
        error: true,
        message: 'Nenhum pedido de oração encontrado!',
      })
    })
})

router.post('/prayer-requests', auth, (req, res) => {
  const prayerRequest = PrayerRequest.create(req.body, err => {
    if (err)
      return res.status(400).json({
        error: true,
        message: 'Error: Não foi possível cadastrar o pedido!',
      })

    return res.status(200).json({
      error: false,
      message: 'Pedido cadastrado com sucesso!',
    })
  })
})

router.put('/prayer-requests/:id', auth, (req, res) => {
  const prayerRequest = PrayerRequest.updateOne(
    { _id: req.params.id },
    req.body,
    err => {
      if (err)
        return res.status(400).json({
          error: true,
          message: 'Error: Não foi possível editar o pedido!',
        })

      return res.json({
        error: false,
        message: 'Pedido editado com sucesso!',
      })
    }
  )
})

router.delete('/prayer-requests/:id', auth, (req, res) => {
  const prayerRequest = PrayerRequest.deleteOne({ _id: req.params.id }, err => {
    if (err)
      return res.status(400).json({
        error: true,
        message: 'Não foi possível apagar o pedido!',
      })

    return res.json({
      error: false,
      message: 'Pedido apagado com sucesso!',
    })
  })
})

module.exports = router
