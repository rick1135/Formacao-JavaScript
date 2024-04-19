const peso = 65;
const altura = 1.70;

const imc = peso / (altura * altura);

if (imc>=40) console.log('Obesidade grave!');
else if(imc>=30 && imc<40) console.log('Obesidade');
else if(imc>=25 && imc<30) console.log('Sobrepeso');
else if(imc>=18.5 && imc<25) console.log('Peso normal');
else console.log('Abaixo do peso');