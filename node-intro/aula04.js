const json = require("./json");

//Banco de dados do Petshop
let pets = [
    {
        id: 1,
        nome: "Yoku",
        tipo: "Cachorro",
        raca: "Husky Siberiano",
        idade: 3,
        genero: "Masculino",
        vacinado: false
    }
];

servicos = [];

const listarPets = () => {
    pets.forEach((pet) => {
        console.log("Nome: " + pet.nome);
        console.log("Tipo: " + pet.tipo);
    });
};

const cocatenarjson = (lista, json) => {
    // Transforma os dados no Json em Objeto
    let arquivo = JSON.parse(json);
    // Faz uma interação em cada item no objeto
    // E os adciona na lista Pets
    for (let item in arquivo){
        lista.push(arquivo[item]);
    };
    // Pode ser feito também com spred
    //let arrayPets = JSON.parse(json);
    //lista.push(...arrayPets)
    //return lista;
};

cocatenarjson(pets, json);
//listarPets();
const filtraPetPorNome = (nome) => {
    let filtro = pets.filter((pet) => pet.nome == nome);

    if(filtro.length == 0) {
        return "Nenhum pet foi encontrado com o nome " + nome;
    } else {
        return filtro;
    };
};

console.log(filtraPetPorNome("Yoku"));