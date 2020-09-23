const express = require('express');
const porta = 3000;
const routerProdutos = require('./routes/routerProdutos');
const app = express();

app.get('/produto', (req, res) =>{
    res.send('Você está na rota produtos, para cadastrar um produto, digite na url : "/adicionar/:nome/:preco/:quantidade/:codigo"');
});

app.use('/produto', routerProdutos);

app.listen(porta, () => console.log('Servidor rodando na porta ' + porta));