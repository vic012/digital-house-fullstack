const IndexController = {
    viewContato: (req, res)=>{
        let {name} = req.query;
        res.render('contato', {'nomeDoUsuario': name})
    },
    confirmarContato: (req, res)=>{
        let {name, email} = req.query;
        res.send('Recebido com sucesso as informações do(a): ' + name);
    },
    viewFormAttform: (req, res)=>{
        let {id} = req.params;
        res.send('Eu quero editar o Produto ' + id);
    }
}

module.exports = IndexController;