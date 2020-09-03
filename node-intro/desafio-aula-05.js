let pets = [
    {
        "id": 1,
        "nome": "Onix",
        "tipo": "cachorro",
        "raca": "Rotweiller",
        "idade": 8,
        "genero": "Masculino",
        "vacinado": true
    },
    {
        "id": 2,
        "nome": "Spike",
        "tipo": "gato",
        "raca": "Siamês",
        "idade": 2,
        "genero": "Masculino",
        "vacinado": false
    }
];

//Funcionalidade que valida o novo pet
let validaDados = (animal) => (animal.nome && animal.tipo && animal.raca && animal.idade && animal.genero && animal.vacinado);

//Desafio 1 - pesquisar/analisar uma forma melhor de solucionar o problema da propriedade ID
//Observe a função cadastrarPet
const cadastrarPet = (objetoPet) => {
    if(typeof objetoPet == "object"){
        //Pega todos os itens reais da array
        let index = [];
        pets.forEach(animal => index.push(animal.id));
        if(validaDados(objetoPet)){
            //Desafio 1
            let novoObjeto = {"id": pets.length + 1, ...objetoPet};
            pets.push(novoObjeto);
            console.log(pets);
        } else {
        console.log("O objeto não tem todas propriedades necessárias informadas");
        };
    } else { 
      console.log("Insira um objeto válido");
    };
};
let objPet = {
    nome: 'Youku',
    tipo: 'Cachorro',
    raca: 'desconhecido',
    idade: 3,
    genero: 'Masculino',
    vacinado: false
};
cadastrarPet(objPet);
//---------------------------------------
//Desafio 2 - excluir um pet através da propriedade id
let excluir = (identificador) => {
    //Se o identificador for um número
    //Deve remover o objeto correspondente ao identiciador
    if (typeof(identificador) == "number"){
        pets.splice(identificador - 1, 1);
    } else {
        console.log("Por favor, insira um identificador válido!");
    };
    return pets;
};
excluir(1); // Retorna "Por favor, insira um identificador válido!"
//excluir(1) // Exclui o objeto de ID 1
//excluir(2) // Exclui o objeto de ID 2
//---------------------------------------
//Desafio 3 - alterar um pet específico também utilizando a propriedade id
let altera = (identificador, propriedade, valor) => {
    //Se o identificador for um número
    //Deve remover o objeto correspondente ao identiciador
    if (typeof(identificador) == "number"){
        let mudarObjeto = pets.find(pets => pets.id == identificador);
        mudarObjeto[propriedade] = valor;
        pets.splice(identificador - 1, 1, mudarObjeto);
    } else {
        console.log("Por favor, insira um identificador válido!");
    };
    return pets;
};
//Deve ser informado o ID, a propriedade que deseja alterar e o valor dessa propriedade
//console.log(altera(2, "idade", 7));