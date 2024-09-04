JavaScript e TypeScript são duas linguagens de programação que são frequentemente usadas para desenvolvimento web, mas têm diferenças significativas em termos de suas características e objetivos. Vamos explorar essas diferenças e ver exemplos simples de código para cada uma.

Diferenças entre JavaScript e TypeScript
Tipo de Linguagem:

JavaScript: É uma linguagem de programação dinâmica e interpretada. Ela não possui um sistema de tipos estáticos e a verificação de tipos é feita em tempo de execução.
TypeScript: É um superconjunto de JavaScript que adiciona tipos estáticos e outras funcionalidades. O código TypeScript é transpilado para JavaScript para ser executado, e a verificação de tipos é feita em tempo de compilação.
Tipagem:

JavaScript: Tipagem dinâmica. Os tipos das variáveis são verificados em tempo de execução.
TypeScript: Tipagem estática opcional. Permite declarar tipos para variáveis, parâmetros e valores de retorno de funções, o que ajuda a identificar erros durante o desenvolvimento.
Sintaxe e Recursos:

JavaScript: Tem uma sintaxe mais simples e não possui recursos avançados de orientação a objetos e tipos que o TypeScript oferece.
TypeScript: Inclui recursos adicionais como interfaces, classes, enums e tipos avançados.
Compilação:

JavaScript: Não requer compilação. O código é executado diretamente pelos navegadores ou pelo Node.js.
TypeScript: Precisa ser compilado para JavaScript antes de ser executado. O compilador TypeScript verifica o código e gera o JavaScript correspondente.

// Código JavaScript simples
function greet(name) {
    return "Hello, " + name;
}

const name = "World";
console.log(greet(name)); // Output: Hello, World

// Código TypeScript simples
function greet(name: string): string {
    return "Hello, " + name;
}

const name: string = "World";
console.log(greet(name)); // Output: Hello, World
