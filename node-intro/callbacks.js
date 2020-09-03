// Callbacks
let servicosFeitos = [];
// Serviço de banho
let banho = (pet) => {
    let data = new Date();
    let dataDefinitiva = data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear();

    console.log("O pet " + pet  + " Está recebendo um ótimo banho");
    servicosFeitos.push("Serviço de banho realizado em " + dataDefinitiva);
};

// Serviço de massagem
let massagem = (pet) => {
    let data = new Date();
    let dataDefinitiva = data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear();

    console.log("O pet " + pet  + " Está recebendo uma ótima massagem");
    servicosFeitos.push("Serviço de massagem realizado em " + dataDefinitiva);
};

let servicos = (pet, servico) => servico(pet);

servicos("Yoku", massagem);
servicos("Yoku", banho);
console.log(servicosFeitos);
