let contatos = [
    {
        'id': 1,
        'nome': 'Victor Torres',
        'email': 'vtorres@digitalhouse.com',
        'mensagem': 'Primeira mensagem',
    },
    {
        'id': 2,
        'nome': 'Victor Torres',
        'email': 'murilo@digitalhouse.com',
        'mensagem': 'Segunda mensagem',
    },
    {
        'id': 3,
        'nome': 'Victor Torres',
        'email': 'victor@digitalhouse.com',
        'mensagem': 'Terceira mensagem',
    },
];     

module.exports = {
    registrar(req, res, next){
        let {nome, email, mensagem} = req.body;
        let id = contatos.length + 1;
        contatos.push({id, nome, email, mensagem})
        res.send(contatos);
    },
    alterar(req, res, next){
    
    },
    listar(req, res, next){
        res.render('contatos', { contatos: contatos })
    },
    excluir(req, res, next){

    },
}