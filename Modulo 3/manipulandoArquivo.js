const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, 'tarefas.csv')

// promessaLeitura.then((dados) => dados.toString('utf8'))
// .then((texto) => texto.split('\n').slice(1))
// .then((semCabecalho) => semCabecalho.map((linha) =>{
    //     const [tarefa, feito] = linha.split(';')
    //     return {tarefa, feito: feito === 'true' ? true : false}
    // }))
    // .then((listaTarefas) => console.log(listaTarefas))
    // .catch((erro) => console.log(erro))
    // .finally(()=> console.log('Arquivo lido'));
    
// Forma mais simples de fazer a leitura do arquivo
async function buscarArquivo(){
    const arquivo = await fs.promises.readFile(filePath);
    const texto = arquivo.toString('utf8');
    console.log(texto);
}
buscarArquivo();