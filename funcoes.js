// modo declarativo
function somar(a,b){
    //código
    console.log("Estou fazendo uma soma");
    return a + b;
};

let resultadoSoma = somar(1,3);

// mode de expressão
const multiplicar = function(a,b){
    //código
    console.log("Estou fazendo uma multiplicação");
    return a * b;
};

let resultadoMultiplica = multiplicar(1,3);

console.log(resultadoSoma);
console.log(resultadoMultiplica);

// Escopo
// Escopo global - no bloco de código geral
let numero = 25;

function imprimir(a,b){
    // Escopo local - bloco de código dentro da função
    let numeroI = 52;
    console.log(numero);
};

console.log(numeroI);//NumeroI não definido
imprimir(1,2);