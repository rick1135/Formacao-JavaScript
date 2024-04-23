const {gets, print} = require('./funcoes1.js');

const media = gets();

if(media>=7) print('Aprovado');
else if(media>=5 && media<7) print('Recuperação');
else print('Reprovado');