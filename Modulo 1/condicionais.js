const numero = 2;
const numeroPar = (numero%2) == 0;

if (numeroPar) console.log('O número é par');
else console.log('O número é impar');

//desafio

const precoEtanol = 5.79;
const precoGasolina = 6.66;
const kmPorLitro = 10;
const distEmKm = 100;
const tipoCombustivel = 'gasolina';

if (tipoCombustivel == 'etanol'){
    console.log('O valor gasto é ' + (distEmKm/kmPorLitro)*precoEtanol);
}
else if(tipoCombustivel == 'gasolina'){
    console.log('O valor gasto é ' + (distEmKm/kmPorLitro)*precoGasolina);
}
else{
    console.log('Tipo de combustível inválido');
}