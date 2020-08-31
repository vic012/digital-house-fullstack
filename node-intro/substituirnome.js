//Se a frase contiver apenas uma palavra para ser subtituida
let trocarPalavraSimples = (texto, procurar, substituir) => texto.replace(procurar, substituir);

console.log("Usado para mudar somente a primeira palavra");
console.log(trocarPalavraSimples("Os professores Victor e Vinicius ensinam muito bem VBA e estou gostando muito de estudar VBA e sei que vou programar muito em VBA", "VBA", "JAVASCRIPT"));
console.log("");

//Se a frase tiver mais de uma palavra a ser substituida
let trocarPalavraCompleta = (texto, procurar, substituir) => {
    //Separa o termo em uma array por palavra
    let palavrasSeparadas = texto.split(" ");
    //A variável que armazenará cada paralvra do texto correto cada interação do loop
    let arrayNovoTexto = [];
    for (let item in palavrasSeparadas){
        if (palavrasSeparadas[item] == procurar){
            arrayNovoTexto.push(substituir);
        } else {
            arrayNovoTexto.push(palavrasSeparadas[item]);
        };
    };
    let textoPronto = "";
    //Concatena as palavras na array arrayNovoTexto em uma frase nova
    let novoTexto = arrayNovoTexto.reduce((primeiro, segundo) => {
        return textoPronto + (primeiro + " " + segundo);
    });
    return novoTexto;
};

console.log("Usado para mudar todas as palavras");
console.log(trocarPalavraCompleta("Os professores Victor e Vinicius ensinam muito bem VBA, estou gostando muito de estudar VBA e sei que vou programar muito em VBA", "VBA", "JAVASCRIPT"));