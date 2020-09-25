const express = require('express');
const porta = 3000;
const routerProdutos = require('./routes/routerProdutos');
const app = express();

app.use('/', routerProdutos);

app.listen(porta, () => console.log('Servidor rodando na porta ' + porta));