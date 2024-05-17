const fs = require("fs");

// callback
// console.log(1);
// fs.readFile('./Formação JavaScript/Modulo 3/tarefas.csv', (err, content) =>{
//     fs.readFile('./Formação JavaScript/Modulo 3/tarefas.csv', (err2, content2) =>{
//         console.log(err, String(content))
//         console.log(err2, String(content2))

//     })
// })

// promise
const readFile = file => new Promise((resolve, reject) =>{
    fs.readFile(file, (err, content) =>{
        if(err){
            reject(err)
        }else{
            resolve(content)
        }
    })
})
// readFile('./Formação JavaScript/Modulo 3/tarefas.csv')
//     .then(content =>{
//         console.log(String(content))
//     })

// async/await
const init = async () => {
  try {
    const content = await readFile(
      "./Formação JavaScript/Modulo 3/tarefas.csv"
    );
    const content2 = await readFile(
      "./Formação JavaScript/Modulo 3/tarefas.csv"
    );
    return String(content) + '\n' + String(content2);
  } catch (err) {
    console.log(err);
  }
};
init().then(console.log);

console.log(2);
console.log(3);
