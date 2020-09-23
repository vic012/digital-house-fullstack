const express = require('express');
const router = express.Router();

router.get('/adicionar/:nome/:preco/:quantidade/:codigo', (req, res)=>{
    let {nome,preco,quantidade,codigo} = req.params;
    let obj = {
        nome, // é = nome: req.params.nome,
        preco, // preco: req.params.preco,
        quantidade,
        codigo
    }
    res.send(obj);
})

module.exports = router;