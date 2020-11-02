const axios = require('axios');

const buscarUsuarioGitHub =  async ()=> {
    let githubUsers = await axios.get('https://api.github.com/users/vic012')

    console.log(githubUsers)
}

buscarUsuarioGitHub()