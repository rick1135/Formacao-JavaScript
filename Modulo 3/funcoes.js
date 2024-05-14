// function teste(){
//     console.log(this)
// }
// const teste2 = () => {
//     console.log(this)
// }
// const rick = {
//     nome: 'Rick',
//     teste,
//     teste2
// }
// rick.teste()
// rick.teste2()

// function soma(x){
//     return function(y){
//         return x+y;
//     }
// }
// console.log(soma(10)(20))

// const pessoa = {
//     nome: 'Rick',
//     idade: 20
// }
// function gritar(prefixo){
//     console.log(prefixo, this.nome)
// }
// gritar.apply(pessoa, ['Olaaaaa']);
// gritar.call(pessoa, 'Olaaaaa');

function adicao(x, y){
    return x+y;
}
function multip(x, y){
    return x*y;
}
function calcular(x, op, y){
    console.log(op(x, y));
}
calcular(10, adicao, 20);
calcular(10, multip, 20);