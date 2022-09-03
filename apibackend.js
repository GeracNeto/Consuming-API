// Consumo de API backend
/* Crio a rota http://localhost:4567 que é minha API e essa minha API consome 
os dados da API https://jsonplaceholder.typicode.com/users e disponibiliza eles
na rota http://localhost:4567
*/
const cors = require('cors')
const express = require('express') // Pega o express das dependências
const axios = require('axios')
const app = express() // Inicia o express na variável app


app.use(cors()) // Permito com que qualquer outro servidor consiga acessar a API

// Servir a API
// http://localhost:4567
app.get('/', async (req, res) => {

    try {
        // response é a resposta do axios, mas eu tiro o data de dentro do response
        const { data } = await axios('https://jsonplaceholder.typicode.com/users')

        return res.json(data)
    } catch (error) {
        console.log(error)
    }
})

app.listen('4567')
