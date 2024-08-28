

JavaScript

O que é?
JavaScript é uma linguagem de programação de alto nível, usada principalmente para criar scripts em páginas web e tornar as interações do usuário mais dinâmicas. Ele é uma das principais tecnologias da web, junto com HTML e CSS.

Características:
- Dinâmica e interpretada.
- Suporte a programação orientada a objetos, funcional e imperativa.
- Fortemente integrado com o DOM (Document Object Model) para manipulação de elementos HTML.

Código Simples em JavaScript

function quadradoDosNumeros(numeros) {
    return numeros.map(numero => numero * numero);
}

const numeros = [1, 2, 3, 4, 5];
const resultados = quadradoDosNumeros(numeros);

console.log("Números:", numeros);
console.log("Quadrados:", resultados);

TypeScript

O que é? 
TypeScript é um superconjunto de JavaScript desenvolvido pela Microsoft. Adiciona tipagem estática e outros recursos que ajudam a detectar erros durante o desenvolvimento e melhorar a manutenibilidade do código.

Características:
- Tipagem estática opcional.
- Compila para JavaScript, o que significa que é compatível com qualquer ambiente que suporte JavaScript.
- Suporte para recursos avançados, como interfaces e classes.

Código Simples em TypeScript:

function quadradoDosNumeros(numeros: number[]): number[] {
    return numeros.map(numero => numero * numero);
}

const numeros: number[] = [1, 2, 3, 4, 5];
const resultados: number[] = quadradoDosNumeros(numeros);

console.log("Números:", numeros);
console.log("Quadrados:", resultados);


Diferenças Principais:

- **TypeScript** adiciona tipos ao JavaScript, o que pode ajudar a evitar certos tipos de erros e facilitar a refatoração do código.
- **JavaScript** é interpretado diretamente pelos navegadores e ambientes de execução, enquanto **TypeScript** precisa ser compilado para JavaScript.
