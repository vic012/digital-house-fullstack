// if ternário
let dia = "domingo";

let resultado = dia == "domingo" ? "Vou à igreja" : "Vou ao trbalho";

console.log(resultado);

// switch
switch(dia){
    // Analisa cada possibilidade
    case "Segunda":
        console.log("Vou estudar à nite");
        // Em cada case colocar o Break para interromper
        // O switch caso algum caso seja satidfeito
        break;
    case "Terça":
        console.log("Dia do curso Full-Stack");
        break;
    case "Quarta":
        console.log("Culto de oração");
        break;
    // Se nenhum case for executado, automaticamente
    // Será executado o default
    default:
        console.log("Dia de EBD e culto a noite");
        // Não preciso do break
};