Diferença entre JavaScript e TypeScript:

JavaScript: É uma linguagem de programação usada principalmente para desenvolvimento web. É uma linguagem de tipagem dinâmica, o que significa que você não precisa especificar o tipo de dados para variáveis e funções.

TypeScript: É um superset do JavaScript que adiciona tipagem estática e outros recursos avançados, como interfaces e classes mais robustas. O código TypeScript é compilado para JavaScript antes de ser executado no navegador ou em um ambiente Node.js.

Exemplo de código em JavaScript:
// JavaScript
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet('World'));

Exemplo de código em TypeScript:
// TypeScript
function greet(name: string): string {
    return `Hello, ${name}!`;
}

console.log(greet('World'));

