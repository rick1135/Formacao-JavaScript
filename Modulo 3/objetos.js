const pessoa = {
    genero: 'masculino'
}

const rick = {
    nome: 'Rick',
    __proto__: pessoa
}

const marcus = Object.create(pessoa);
marcus.nome = 'Marcus';

console.log(rick.genero);
console.log(marcus.genero);