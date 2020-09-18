const express = require('express');
const porta = 3000;
const app = express();

app.get('/', (req, res) => res.send('Olá você está na rota home'));
app.get('/users', (req, res) => res.send('Olá você está na lista de usuários'));
app.get('/Sobre', (req, res) => res.send('Olá você está página sobre'));

app.listen(porta, () => console.log('Servidor rodando na porta ' + porta));