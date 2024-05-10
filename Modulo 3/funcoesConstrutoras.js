function Pessoa(nome, idade){
    this.nome = nome;
    this.idade = idade;
}

Pessoa.prototype.falar = function(){
    console.log(`${this.nome} está falando`);
}

const rick = new Pessoa('Rick', 20);
console.log(rick);
rick.falar();