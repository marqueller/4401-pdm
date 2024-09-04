Diferenças Entre TypeScript e JavaScript
Tipagem Estática vs. Tipagem Dinâmica:

TypeScript: É uma linguagem com tipagem estática. Isso significa que você pode definir o tipo das variáveis, parâmetros e retornos de funções. O compilador TypeScript verifica os tipos e emite erros se você tentar fazer algo que não é permitido pelos tipos.
JavaScript: É uma linguagem com tipagem dinâmica. Os tipos são verificados em tempo de execução, o que significa que você pode mudar o tipo de uma variável a qualquer momento e não há verificação de tipo antes da execução do código.
Compilação:

TypeScript: O código TypeScript precisa ser compilado para JavaScript antes de ser executado. O compilador TypeScript (tsc) verifica o código em busca de erros e o converte para JavaScript.
JavaScript: Não precisa de compilação. É interpretado diretamente pelos navegadores ou pelo ambiente de execução (como Node.js).
Características Avançadas:

TypeScript: Suporta recursos modernos do JavaScript e adiciona outras características, como interfaces, tipos genéricos, e enums, que não estão disponíveis diretamente no JavaScript.
JavaScript: Suporta recursos do ECMAScript que evoluem com o tempo, mas não tem algumas das características adicionais que o TypeScript oferece.
Exemplo Simples de Código
JavaScript:

javascript
Copiar código
// Função para somar dois números
function soma(a, b) {
    return a + b;
}

// Chamando a função
let resultado = soma(5, 10);
console.log(resultado); // Saída: 15
TypeScript:

typescript
Copiar código
// Função para somar dois números com tipagem estática
function soma(a: number, b: number): number {
    return a + b;
}

// Chamando a função
let resultado: number = soma(5, 10);
console.log(resultado); // Saída: 15
Explicação dos Exemplos:
No JavaScript, a função soma pode aceitar qualquer tipo de argumento e o tipo de retorno não é especificado.
No TypeScript, os parâmetros a e b e o valor de retorno da função soma são explicitamente definidos como números (number). Isso ajuda a evitar erros, como passar uma string em vez de um número.