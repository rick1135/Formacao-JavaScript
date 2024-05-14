const numeroAleatorio = new Promise((resolve, reject) => {
    setTimeout(()=>{
        const numero = parseInt(Math.random()*100);
        resolve(numero);
    }, 1000)
})

console.log('teste');

numeroAleatorio.then((numero) => {
    console.log(numero);
    return numero * 2;
}).then((numero) => {
    console.log(numero);
}).catch((error) => {
    console.error(error)
}).finally(()=>{
    console.log('Promise finalizada');
})