// spread para arrays
let frutas = ["Maça", "Banana", "Uva"];
let frutasFavoritas = ["Abacaxi", "Uva"];
let listaCompleta = [...frutas, ...frutasFavoritas];

// console.log(listaCompleta) // [ 'Maça', 'Banana', 'Uva', 'Abacaxi', 'Uva' ]

// spread para objetos
let faculdade = {
    curso: "Ciências Contábeis",
    polo: "Unopar - Sousa"
};

let aluno = {
    nome: "Pedro Henrique",
    idade: "25"
};

let aprovados = {
    ...faculdade,
    ...aluno
};

//console.log(aprovados);// {curso: 'Ciências Contábeis',polo: 'Unopar - Sousa',nome: 'Pedro Henrique',idade: '25'}

// Spread para funções
function letras(...paramns){
    //console.log(paramns)// [ 'a', 'P' ]
}

letras("a", "P");