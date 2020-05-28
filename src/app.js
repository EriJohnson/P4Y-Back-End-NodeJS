const express = require('express')
const cors = require('cors')
const PrayerRequestRouter = require('./routers/prayerRequest')
const userRouter = require('./routers/user')
require('./db/db')

const app = express()

app.use(express.json())
app.use(cors('Access-Control-Allow-Origin', process.env.CLIENT_URL))
app.use(PrayerRequestRouter, userRouter)

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Servidor iniciado na porta ${port}`))
