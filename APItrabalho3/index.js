const express = require('express')
const cors = require('cors')
const operacoes = require('./queries')
const bodyParser = require('body-parser')
const app = express()
const port = 4002

app.use(express.json())
app.use( bodyParser.json() );       
app.use(bodyParser.urlencoded({    
  extended: true
})); 
app.use(cors())

app.get('/evento',operacoes.getEventos)
app.post('/evento/cria',operacoes.adicionaEvento)
app.put('/evento/atualiza/:id',operacoes.atualizaEvento)
app.delete('/evento/delete/:id',operacoes.excluiEvento)

app.get('/categoria',operacoes.getCategorias)
app.post('/categoria/cria',operacoes.adicionaCategoria)
app.put('/categoria/atualiza/:id',operacoes.atualizaEvento)
app.delete('/categoria/delete/:id',operacoes.excluiCategoria)



app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })
