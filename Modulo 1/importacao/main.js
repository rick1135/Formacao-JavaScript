const {gets, print} = require('./funcoes-auxiliares.js');
const qtd = gets();
let maior = 0;

for (let i = 0; i < qtd; i++) {
    const n = gets();
    if(n > maior) maior = n;
}

print(maior);