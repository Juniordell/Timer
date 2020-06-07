const express = require('express')
const app = express()
const handlebars = require('express-handlebars')

app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(express.static("public"))

app.get('/', (req, res) => {
    res.render('cont')
})

app.get('/time', (req, res) => {
    res.render('index')
})

app.listen(8081, function() {
    console.log('Servidor rodando na url http://localhost:8081')
})   // MUST BE THE LAST LINE