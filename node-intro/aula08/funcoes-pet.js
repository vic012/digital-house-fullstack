const listarPets = (pets) => {
    pets.forEach((pet) => {
        console.log("Nome: " + pet.nome);
        console.log("Tipo: " + pet.tipo);
    })
}

const validaDados = (novoPet) => {
    return (
      // novoPet.id &&
      novoPet.nome && 
      novoPet.tipo &&
      novoPet.raca &&
      novoPet.idade &&
      novoPet.genero &&
      // validando se o tipo da propriedade vacinado e booleano ou nao atraves do typeof 
      typeof novoPet.vacinado == "boolean"
    )
  }

const cadastrarPet = (pets, objetoPet) => {
    if(typeof objetoPet == "object"){
      if(validaDados(objetoPet)){
  
        let novoObjeto = {
          id: pets.length + 1,
          ...objetoPet
        }
  
        pets.push(novoObjeto)
        console.log(pets)
      } else {
        console.log("O objeto não tem todas propriedades necessárias informadas")
      }
    } else { 
      console.log("Insira um objeto válido")
    }
}

const servicosPrestados = (pet, servico) => {
    servico(pet)
}

const darBanhoNoPet = (pet) => {
  let dataDoServico = new Date()
  dataDoServico = dataDoServico.getDate() + "/" + (dataDoServico.getMonth() + 1) + "/" + dataDoServico.getFullYear()
  pet.servicos.push("Serviço de banho realizado em " + dataDoServico)
  console.log("O pet " + pet.nome + " tomou banho")
}

const tosarPet = (pet) => {
  let dataDoServico = new Date()
  dataDoServico = dataDoServico.getDate() + "/" + (dataDoServico.getMonth() + 1) + "/" + dataDoServico.getFullYear()
  pet.servicos.push("Serviço de tosa realizado em " + dataDoServico)
  console.log("O pet " + pet.nome + " foi tosado")
}

const cadastrarPetsDoJsonSpreadOperator = (lista, json) => {
    let arrayPets = JSON.parse(json)
    lista.push(...arrayPets)
    return lista
}

const filtraPetPorNome = (pets, nome) => {
    let petsFiltrados = pets.filter((pet) => {
      return pet.nome == nome
    })
  
    if(petsFiltrados.length == 0){
      return "Nenhum pet foi encontrado com o nome " + nome
    } else {
      return petsFiltrados
    }
}

const removerPet = (pets, id) => {
    let pet = pets.filter((pet) => {
      return pet.id != id
    })
  
    if(pet.length != 0){
      pets.splice(id - 1, 1)
      console.log(pets)
    } else {
      console.log("Nenhum pet foi encontrado com o id " + id)
    }
}

const atualizaPet = (pets, id, objeto) => {
    let pet = pets.find(pet => pet.id == id)
  
    for(var propriedade in objeto){
      if(propriedade == "nome"){
        pet.nome = objeto[propriedade]
      }
  
      if(propriedade == "tipo"){
        pet.tipo = objeto[propriedade]
      }
  
      if(propriedade == "raca"){
        pet.raca = objeto[propriedade]
      }
  
      if(propriedade == "idade"){
        pet.idade = objeto[propriedade]
      }
  
       if(propriedade == "vacinado"){
        pet.vacinado = objeto[propriedade]
      }
    }
    console.log(pet)
}
  
module.exports = {
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
};