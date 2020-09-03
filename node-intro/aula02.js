const json = require("./json");

//Banco de dados do Petshop
let pets = [
    {
        nome: "Yoku",
        tipo: "Cachorro",
        raca: "Husky Siberiano",
        idade: 3,
        genero: "Masculino",
        vacinado: false
    }
];
// Visualiza os pets e retorna a quantidade de vacinados
// E quais os que precisam ser vacinados
const visualizar = (pet) => {
    let vacinados = 0;
    let naoVacinados = 0;
    let sequencia = 1;
    for (let item in pet){
        console.log("Pet Nº " + sequencia++);
        console.log("Nome: " + pet[item].nome);
        console.log("Tipo: " + pet[item].tipo);
        console.log("Raca: " + pet[item].raca);
        console.log("Genero: " + pet[item].genero);
        console.log("Idade: " + pet[item].idade);
        console.log("Vacinado " + pet[item].vacinado);
        if (pet[item].vacinado){
            console.log(" ");
            vacinados ++;
        } else {
            console.log(pet[item].nome + " precisa ser vacinado");
            console.log(" ");
            naoVacinados++;
        };
    };
    console.log(vacinados + " Pet(s) vacinado(s)");
    console.log(naoVacinados + " Pet(s) não vacinado(s)");
    console.log(" ");
};
//Funcionalidade que valida o novo pet
const validacao = (itens) => {
    if (itens == 6){
        return true
    } else {
        return false
    };
};

//Cadastra o novo pet se for validado
//Senão retorna um feedback ao cliente
const cadastrarPet = (animal) => {
    if ((typeof(animal) == "object")){
        let numeroDeAtributos = 0;
        for (let item in animal){
           numeroDeAtributos ++;
        };
        if (validacao(numeroDeAtributos)){
            pets.push(animal)
            console.log("Pet cadastrado com sucesso");
            console.log("Dados do petshop:");
            console.log(" ");
            visualizar(pets);
        } else {
            console.log("Por favor, insira todos os atributos do Pet")
        };
    } else {
        console.log("Insira um Pet válido e os seus atributos")
    };
};

// Caso queira somente visualizar os dados atuais
//visualizar(pets);
// Caso queira cadastrar, após o cadastro o sistema já exibi os novos dados do petshop 
//cadastrarPet(gato);

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
cadastrarPet(pets, json);