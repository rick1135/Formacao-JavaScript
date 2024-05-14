const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

class Pessoa{
    constructor(nome){
        this.nome = nome;
    }
}

const pessoas = [new Pessoa('Rick'), new Pessoa('Andresa'),new Pessoa('Vitor'), new Pessoa('José')]

// lista.forEach((value, i, listRef) =>{
//     console.log(value, i, listRef);
// })

// const listaPares = lista.filter((element) => {
//     return element % 2 === 0;
// })
// console.log(listaPares);
// console.log(lista);

// const listaNomes = pessoas.map((element) => {
//     return element.nome;
// })
// console.log(listaNomes);

// const somaTudo = lista.reduce((previous, curremt) => {
//     return previous + curremt;
// })
// console.log(somaTudo);

console.log(lista.join(';'));
console.log(lista.join('/'));
const listaNomes = pessoas.map((element) => {
    return element.nome;
}).join('; ')
console.log(listaNomes);