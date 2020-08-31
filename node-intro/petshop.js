// Declara os animais do Petshop
let pets = [
    {
        nome: "Yuko",
        tipo: "Cachorro",
        raca: "Akita inu",
        idade: 6,
        genero: "Masculino",
        vacinado: true
    },
    {
        nome: "Pituco",
        tipo: "Pássaro",
        raca: "Calopsita",
        idade: 3,
        genero: "Fêmea",
        vacinado: false
    }
];

let validacao = (animal) => (animal.nome && animal.tipo && animal.raca && animal.idade && animal.genero && animal.vacinado);

let pet = {
    nome: "Nemo",
    tipo: "Peixe",
    raca: "Peixe palhaço",
    idade: 2,
    genero: "Masculino",
    vacinado: false
};

console.log(validacao(pet));