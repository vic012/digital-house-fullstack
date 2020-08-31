// Callbacks
let servicosFeitos = [];
// Serviço de banho
let banho = (pet) => {
    console.log("O pet " + pet + " Está tomando um ótimo banho");
    servicosFeitos.push(
        {
            nome: pet,
            servico: "Banho",
        }
    );
};
// Serviço de massagem
let massagem = (pet) => {
    console.log("O pet " + pet  + " Está recebendo uma ótima massagem");
    servicosFeitos.push(
        {
            nome: pet,
            servico: "Massagem",
        }
    );
};

let servicos = (pet, servico) => servico(pet);

servicos("Yoku", banho);
console.log(servicosFeitos[0]);
