const mongoose = require('mongoose')

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log('Conexão com MongoDB realizada com sucesso!')
  })
  .catch(erro => {
    console.log('Erro: Conexão com MongoDB não foi realizada com sucesso!')
  })
