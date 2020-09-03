//Se a frase contiver apenas uma palavra para ser subtituida
const trocarPalavraSimples = (texto, procurar, substituir) => texto.replace(procurar, substituir);

console.log("Usado para mudar somente a primeira palavra");
console.log(trocarPalavraSimples("Os professores Victor e Vinicius ensinam muito bem VBA e estou gostando muito de estudar VBA e sei que vou programar muito em VBA", "VBA", "JAVASCRIPT"));
console.log("");

//Se a frase tiver mais de uma palavra a ser substituida
let trocarPalavraCompleta = (texto, procurar, substituir) =>
    //Separa o termo e reagrupa com a palavra correta
    //Return implícito da arrow function
    texto.split(procurar).join(substituir);

console.log("Usado para mudar todas as palavras");
console.log(trocarPalavraCompleta("Os professores Victor e Vinicius ensinam muito bem VBA, estou gostando muito de estudar VBA e sei que vou programar muito em VBA", "VBA", "JAVASCRIPT"));