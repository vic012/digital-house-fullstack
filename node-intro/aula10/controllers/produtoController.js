const produtoController = {
    getProduto: (req, res)=>{
        let {nome,preco,quantidade,codigo} = req.params;
        let obj = {
            nome, // é = nome: req.params.nome,
            preco, // preco: req.params.preco,
            quantidade,
            codigo
        }
        res.send(obj);
    },
    getQuery: (req, res)=>{
        let {nome, cor} = req.query;
        let produto = "<h1><a href='#'>Você quer comprar um(a) " + nome + " " + cor + "?</h1>"
        res.send(produto);
    }
}

module.exports = produtoController;