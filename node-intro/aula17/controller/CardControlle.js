module.exports = {
    index(req, res, next){
        let cards = [
        {
            'caminho_imagem': './images/card-vingadores.jpg',
            'titulo': 'Primeiro Título',
            'texto': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore modi nostrum, animi dolor quaerat laboriosam non veniam cumque, quod earum inventore! Praesentium iusto optio doloribus cupiditate alias nobis ipsam dolorem!',
            'botao': 'Ver mais'
        },
        {
            'caminho_imagem': './images/card-vingadores.jpg',
            'titulo': 'Primeiro Título',
            'texto': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore modi nostrum, animi dolor quaerat laboriosam non veniam cumque, quod earum inventore! Praesentium iusto optio doloribus cupiditate alias nobis ipsam dolorem!',
            'botao': 'Ver mais'
        },
        {
            'caminho_imagem': './images/card-vingadores.jpg',
            'titulo': 'Primeiro Título',
            'texto': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore modi nostrum, animi dolor quaerat laboriosam non veniam cumque, quod earum inventore! Praesentium iusto optio doloribus cupiditate alias nobis ipsam dolorem!',
            'botao': 'Ver mais'
        }
    ];
    res.render('index', {cards: cards});
  }
}