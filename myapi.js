// Daqui para cima é uma API criada e servida na rota '/' na porta '4567
const cors = require('cors')
const express = require('express') // Pega o express das dependências
const app = express() // Inicia o express na variável app

app.use(cors()) // Permito com que qualquer outro servidor consiga acessar minha API

// Servir a API
// http://localhost:4567
app.get('/', (req, res) => {
    return res.json([
        { name: 'Geraldo' },
        { name: 'Thainá' },
        { name: 'Renato' }
    ])
})

app.listen('4567')
