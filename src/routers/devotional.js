const express = require('express')
const Devotional = require('../models/Devotional')

const router = express.Router()

router.get('/devotionals', (req, res) => {
  Devotional.find({})
    .then(devotional => {
      return res.json(devotional)
    })
    .catch(erro => {
      return res.status(400).json({
        error: true,
        message: 'Nenhum Devocional encontrado!',
      })
    })
})

router.get('/devotionals/:id', (req, res) => {
  Devotional.findOne({ _id: req.params.id })
    .then(devotional => {
      return res.json(devotional)
    })
    .catch(erro => {
      return res.status(400).json({
        error: true,
        message: 'Nenhum Devocional encontrado!',
      })
    })
})

router.post('/devotionals', (req, res) => {
  const devotional = Devotional.create(req.body, err => {
    if (err)
      return res.status(400).json({
        error: true,
        message: 'Error: Devocional não foi cadastrado com sucesso!',
      })

    return res.status(200).json({
      error: false,
      message: 'Devocional cadastrado com sucesso!',
    })
  })
})

router.put('/devotionals/:id', (req, res) => {
  const devotional = Devotional.updateOne(
    { _id: req.params.id },
    req.body,
    err => {
      if (err)
        return res.status(400).json({
          error: true,
          message: 'Error: Devocional não foi editado com sucesso!',
        })

      return res.json({
        error: false,
        message: 'Devocional editado com sucesso!',
      })
    }
  )
})

router.delete('/devotionals/:id', (req, res) => {
  const devotional = Devotional.deleteOne({ _id: req.params.id }, err => {
    if (err)
      return res.status(400).json({
        error: true,
        message: 'Error: Devocional não foi apagado com sucesso!',
      })

    return res.json({
      error: false,
      message: 'Devocional apagado com sucesso!',
    })
  })
})

module.exports = router
