JavaScript
O que é?
JavaScript é uma linguagem de programação interpretada amplamente utilizada para adicionar interatividade e dinamismo a páginas web. Desenvolvida pela Netscape na década de 1990, tornou-se uma das principais tecnologias da web junto com HTML e CSS.

Como funciona?
JavaScript é executado no lado do cliente (navegador) ou no lado do servidor (com Node.js). O código JavaScript é interpretado pelo navegador em tempo real, o que significa que não precisa ser compilado antes da execução. A linguagem é usada para manipular o DOM (Document Object Model), responder a eventos do usuário e realizar operações assíncronas, entre outras coisas.

TypeScript
O que é?
TypeScript é um superconjunto de JavaScript que adiciona tipagem estática e outras funcionalidades avançadas. Criado pela Microsoft, TypeScript é projetado para melhorar a robustez e a escalabilidade do código JavaScript.

Como funciona?
TypeScript permite aos desenvolvedores definir tipos para variáveis, funções e objetos. O código TypeScript é transpilado para JavaScript utilizando o compilador TypeScript (tsc). Após a transpilação, o código JavaScript resultante pode ser executado em qualquer ambiente que suporte JavaScript.

exemplos:

function saudacao(nome) {
    return `Olá, ${nome}!`;
}


console.log(saudacao('Mundo')); // Saída: Olá, Mundo!


class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }

    cumprimentar() {
        return `Olá, eu sou ${this.nome}`;
    }
}

const pessoa = new Pessoa('Ana');
console.log(pessoa.cumprimentar()); // Saída: Olá, eu sou Ana

function saudacao(nome: string): string {
    return `Olá, ${nome}!`;
}


console.log(saudacao('Mundo')); // Saída: Olá, Mundo!


interface Pessoa {
    nome: string;
    idade: number;
}

class PessoaClass implements Pessoa {
    nome: string;
    idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    cumprimentar(): string {
        return `Olá, eu sou ${this.nome} e tenho ${this.idade} anos.`;
    }
}

const pessoa = new PessoaClass('Ana', 30);
console.log(pessoa.cumprimentar()); // Saída: Olá, eu sou Ana e tenho 30 anos.