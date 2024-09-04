Diferença entre JavaScript e TypeScript
JavaScript:

É uma linguagem de programação interpretada, amplamente usada no desenvolvimento web.
É dinamicamente tipada, o que significa que você não precisa especificar tipos de dados para variáveis e funções.
Não possui verificação de tipos em tempo de compilação, o que pode levar a erros que só são detectados em tempo de execução.
TypeScript:

É um superconjunto do JavaScript que adiciona tipagem estática.
Permite especificar tipos para variáveis, parâmetros de função e retornos, o que ajuda a identificar erros em tempo de desenvolvimento.
O código TypeScript é compilado para JavaScript, o que significa que o navegador ainda interpreta o código como JavaScript.

Exemplos de código:

// JavaScript
function soma(a, b) {
    return a + b;
}

const resultado = soma(5, 3);
console.log("Resultado da soma:", resultado);

// TypeScript
function soma(a: number, b: number): number {
    return a + b;
}

const resultado: number = soma(5, 3);
console.log("Resultado da soma:", resultado);
