class Carro {
    marca;
    cor;
    gastoPorKm;

    constructor (marca, cor, gastoPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoPorKm = gastoPorKm;
    }

    gastoPorPercurso(qtdKm, precoCombustivel) {
        return this.gastoPorKm * precoCombustivel * qtdKm;
    }
}

let carro1 = new Carro();
carro1.marca = "Fiat";
carro1.cor = "Vermelho";
carro1.gastoPorKm = 0.1;
console.log(carro1.gastoPorPercurso(70, 5));

class Pessoa{
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    imc(){
        return this.peso / (this.altura * this.altura);
    }

    imcCategoria(){
        if(this.imc() < 18.5) return "Abaixo do peso";
        else if(this.imc() < 24.9) return "Peso normal";
        else if(this.imc() < 29.9) return "Sobrepeso";
        else if(this.imc() < 34.9) return "Obesidade grau 1";
        else if(this.imc() < 39.9) return "Obesidade grau 2";
        else return "Obesidade grau 3";
    }
}

let pessoa1 = new Pessoa();
pessoa1.nome = "José";
pessoa1.peso = 70;
pessoa1.altura = 1.75;
console.log(pessoa1.imc().toFixed(2));
console.log(pessoa1.imcCategoria());