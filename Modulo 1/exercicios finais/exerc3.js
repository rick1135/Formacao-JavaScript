const {gets, print} = require('./funcoes3.js');

let salario = gets();
let beneficios = gets();

function imposto(salario){
    if(salario>2500) return salario*0.85;
    else if(salario<=2500 && salario>1100) return salario*0.9;
    else return salario*0.95;
}

console.log(imposto(salario)+beneficios);