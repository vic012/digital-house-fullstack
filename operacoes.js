// Adição

console.log(2+2);

// Subtração

console.log(10-5);

// Multiplicação

console.log(10*5);

// Divisão

console.log(10/2);

// Incrementar

let numero = 10;
console.log(numero++);
// O resultado será 10, isso porque
// imprimiu antes de aumentar
// para imprimir já com incrementação
// bastava colocar console.log(++numero)
console.log(numero);

// Decrementar

console.log(--numero);

// Comparação
// Igualdade
console.log(5 == 5);
// Igualdade rigorosa Que leva em consideração até o tipo
console.log(5 === "5");
// Diferença e diferença rigorosa
console.log(5 != 2);
console.log(5 !== "5");
// Maior
console.log(5 > 3);
// Menor
console.log(5 < 5);
// Maior ou igual
console.log(6 >= 5);
// Menor ou igual
console.log(6 <= 3);

// Comparadores Lógicos &&
console.log(10 > 5 && 8 < 10); //true
console.log(10 > 5 && 8 > 10); //false

// Comparadores Lógicos or ||
console.log(10 > 5 || 8 > 10); //true
console.log(10 < 5 || 8 > 10); //false

// Comparador de negação !
console.log(true);//true
console.log(!true)//false
console.log(! 5 > 3);//false

// Concatenação
let nome = "Pedro";
let sobrenome = "Henrique";
console.log(nome + " " + sobrenome);