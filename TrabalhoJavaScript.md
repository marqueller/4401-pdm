CEDUP Renato Ramos Da Silva 
Nome:Alvaro Machado Feltrin
Turma:3º7

JavaScript

JavaScript é uma linguagem de programação amplamente usada para criar conteúdo interativo e dinâmico em páginas web. É um dos três pilares da web, junto com HTML e CSS.

Características:

- Interpretação e Execução:** JavaScript é executado no navegador do cliente, o que significa que os scripts são interpretados e executados diretamente pelo navegador, sem necessidade de compilação.
- Linguagem de Programação Dinâmica:** JavaScript é uma linguagem de tipagem dinâmica e fraca. Isso significa que você não precisa declarar o tipo de uma variável explicitamente, e o tipo pode mudar durante a execução.
- Assíncrono e Orientado a Eventos:** Suporta programação assíncrona através de callbacks, Promises e async/await. É muito usado para manipulação de eventos como cliques e entradas do usuário.
- Versatilidade:** Pode ser usado tanto no lado do cliente (navegador) quanto no lado do servidor (com Node.js).

Principais Características:

- Funções de Ordem Superior:** Funções podem ser passadas como argumentos, retornadas de outras funções, etc.
- Prototype-based Inheritance:** Em vez de classes, JavaScript usa protótipos para herança de objetos.
- ECMAScript:** JavaScript é baseado em especificações ECMAScript, e novas versões são lançadas periodicamente com melhorias e novas funcionalidades.

TypeScript

TypeScript é um superset de JavaScript desenvolvido pela Microsoft. Ele adiciona tipos estáticos e outras funcionalidades ao JavaScript, visando melhorar a produtividade e a manutenção de código em projetos grandes.

Características:

- Tipagem Estática:** TypeScript permite a declaração de tipos para variáveis, parâmetros e retornos de funções. Isso ajuda a detectar erros em tempo de compilação em vez de em tempo de execução.
- Compilação: TypeScript é compilado para JavaScript. O código TypeScript é transpilado para JavaScript padrão, que pode ser executado em qualquer navegador ou ambiente que suporte JavaScript.
- Suporte a Classes e Interfaces:** TypeScript oferece suporte a conceitos de programação orientada a objetos como classes, interfaces e herança, com uma sintaxe mais familiar para desenvolvedores que vêm de outras linguagens orientadas a objetos.
- Ferramentas de Desenvolvimento:** Melhora a experiência do desenvolvedor com autocompletar, verificação de tipo e refatoração mais segura.

Principais Características:

- Inferência de Tipos:** Mesmo se você não declarar explicitamente os tipos, o TypeScript tenta inferir os tipos com base no contexto.
- Modularidade: Suporta módulos ES6 e outros formatos de módulos, facilitando a organização e o encapsulamento de código.
- Anotações de Tipo:** Permite especificar tipos para variáveis, funções, objetos e outros, ajudando a prevenir erros e facilitando a compreensão do código.

Comparação

- Tipos de Dados:** JavaScript é dinâmico e flexível, mas isso pode levar a erros difíceis de rastrear. TypeScript oferece tipagem estática, o que ajuda a detectar erros antes da execução e melhora a legibilidade do código.
- Desenvolvimento de Código:** TypeScript oferece melhores ferramentas de desenvolvimento devido à verificação de tipos e à sua compatibilidade com editores e IDEs. JavaScript é mais direto e tem uma curva de aprendizado menor para iniciantes.
- Compatibilidade:** JavaScript é universal e executa em qualquer navegador ou ambiente que suporte ECMAScript. TypeScript, por outro lado, precisa ser compilado para JavaScript, o que adiciona uma etapa extra no processo de desenvolvimento.

Por tanto JavaScript é essencial para qualquer desenvolvedor web e é uma das linguagens mais populares no mundo. TypeScript, por sua vez, é uma excelente escolha para projetos maiores e mais complexos, onde a verificação de tipos e a manutenção de código são prioridades. A escolha entre JavaScript e TypeScript pode depender da natureza do projeto e das preferências da equipe de desenvolvimento.

aqui um breve código:

JAVASCRIPT

// soma de dois números
function somar(a, b) {
    return a + b;
}

// usando a soma
const resultado = somar(9, 7);
console.log("Resultado:", resultado); // Saída: Resultado: 16



TYPESCRIPT

//soma de dois números
function somar(a: number, b: number): number {
    return a + b;
}

// usando a soma
const resultado: number = somar(5, 9);
console.log("Resultado:", resultado); // Saída: Resultado: 14