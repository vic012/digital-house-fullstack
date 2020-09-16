const json = require('./json')
const {
    listarPets,
    validaDados,
    cadastrarPet,
    servicosPrestados,
    darBanhoNoPet,
    tosarPet,
    cadastrarPetsDoJsonSpreadOperator,
    filtraPetPorNome,
    removerPet,
    atualizaPet
} = require('./funcoes-pet');
const {
    calcular,
    soma,
    subtrai,
    divide,
    multiplica
} = require('./funcoes-pet');

// relembrando criação de uma variável com let recebendo valor de uma string
let organizacao = 'Petshop Node';

// criando um array contendo objetos, onde, a idéia deste array é criar uma lista de animais
// de modo que cada objeto irá representar um animal dentro da nossa lista de pets
let pets = [
  {
    id: 1,
    nome: 'Yoshi',
    tipo: 'cachorro',
    raca: 'Akita inu',
    idade: 6,
    genero: 'Masculino',
    vacinado: true,
    servicos: []
  },
  {
    id: 2,
    nome: 'Pituco',
    tipo: 'pássaro',
    raca: 'calopsita',
    idade: 3,
    genero: 'Fêmea',
    vacinado: false,
    servicos: []
  }
];

let objetoPetAtualizado = {
  nome: "Atualizando Nome",
  tipo: "Atualizando Tipo",
  raca: "siames",
  idade: 3,
  genero: "Fêmea",      
  vacinado: false
}
