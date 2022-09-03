url = 'http://localhost:4567' // rota da API

// Função que executa a requisição na API
const getContent = async () => {
    try {

        const response = await fetch(url)

        const data = await response.json()

        showUser(data)

    } catch (error) {
        console.log('Error:', error)
    }
}

const showUser = (users) => {

    let output = ''

    users.map(user => {
        output += `<li>${user.name}</li>`
    })

    document.querySelector("main").innerHTML = output
}

getContent()


