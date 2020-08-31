// Arquivos JSON
let pessoa = '{"nome": "Pedro","idade": 25,"altura": 1.86}';
// Objeto literal
let jsonObjeto = JSON.parse(pessoa);

//Teste
console.log(jsonObjeto);

// Transforma em JSON
let objetoLiteral = {
    nome: "Pedro",
    idade: 25,
    altura: 1.86,
};
// Arquivo JSON já transformado
let objetoJson = JSON.stringify(objetoLiteral);

console.log(objetoJson);
