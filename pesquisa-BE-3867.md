Diferenças entre JavaScript e TypeScript
Tipo de Sistema:

JavaScript: Linguagem de tipagem dinâmica. As variáveis podem conter qualquer tipo de dado e seu tipo pode mudar em tempo de execução.
TypeScript: Linguagem de tipagem estática opcional. Permite definir tipos para variáveis e funções, o que pode ajudar a detectar erros durante o desenvolvimento.
Compilação:

JavaScript: Interpretada diretamente pelos navegadores e ambientes de execução como Node.js.
TypeScript: Compilada para JavaScript. O código TypeScript precisa ser transpilado (compilado) para JavaScript antes de ser executado.
Recursos Adicionais:

JavaScript: Segue o padrão ECMAScript e possui funcionalidades que evoluem ao longo das versões (ES5, ES6, ES7, etc.).
TypeScript: Inclui recursos adicionais como interfaces, classes e tipos avançados. É uma linguagem que superset do JavaScript, ou seja, todo código JavaScript válido é também um código TypeScript válido.

javascript:
function add(a, b) {
    return a + b;
}

console.log(add(5, 10)); // Saída: 15


typescript:
function add(a: number, b: number): number {
    return a + b;
}

console.log(add(5, 10)); // Saída: 15