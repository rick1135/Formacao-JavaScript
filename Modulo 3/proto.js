const pessoa = {
    genero: 'masculino'
}

const rick = {
    nome: 'Rick',
    idade: 20,
    __proto__: pessoa
}

console.log(rick.genero);