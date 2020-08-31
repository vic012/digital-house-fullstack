
function naoPareDeContarImparesAte(numero){
    for(let contador = 0;contador <= numero;contador++){
        if (contador % 2 == 1){
            return contador;
        };
    };
};
let impar = naoPareDeContarImparesAte(5);
console.log(impar);