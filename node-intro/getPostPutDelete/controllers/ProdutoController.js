let ProdutoController = {
    viewForm: (req, res)=>{
        return res.render('produto');
    },
    salvarForm: (req, res)=>{
        let {nomeProduto, precoPreco} = req.body;
        res.redirect('/produtos/sucesso');
    },
    sucesso: (req, res)=>{
        res.render('sucesso');
    }
}

module.exports = ProdutoController;