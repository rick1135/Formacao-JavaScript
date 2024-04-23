const {gets, print} = require('./funcoes2.js');

const qtd = gets();
let par=0, impar=99;
for(let i=0; i<qtd; i++){
    let numero = gets();
    if(numero % 2 == 0){
        if(numero>par) par = numero;
    }else{
        if(numero<impar) impar = numero;
    }
}
print(par);
print(impar);