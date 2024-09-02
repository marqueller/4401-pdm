
ALuno: Enzo Rosa
Turma: 3°7

JavaScript
O que é: JavaScript é uma linguagem de programação amplamente utilizada para criar e controlar conteúdo dinâmico em páginas web. É uma linguagem interpretada e executada em navegadores web, mas também pode ser usada em servidores com ambientes como Node.js.

Características:

Tipagem Dinâmica: Variáveis podem mudar de tipo em tempo de execução.
Sintaxe Flexível: Menos rígida, o que pode levar a erros difíceis de detectar.
Funcionalidade Assíncrona: Suporte para promessas e async/await para lidar com operações assíncronas.
Ecossistema: Possui uma vasta gama de bibliotecas e frameworks, como React, Angular, e Vue.js.

TypeScript
O que é: TypeScript é uma linguagem de programação desenvolvida pela Microsoft que é um superconjunto de JavaScript. Adiciona tipagem estática e outras funcionalidades que visam melhorar a experiência de desenvolvimento e a robustez do código.

Características:

Tipagem Estática: Permite declarar tipos de variáveis e funções, o que ajuda a detectar erros em tempo de compilação.
Compilação para JavaScript: TypeScript é transpilado para JavaScript antes de ser executado, garantindo compatibilidade com qualquer ambiente JavaScript.
Melhor Integração com IDEs: Ferramentas de desenvolvimento podem oferecer melhores autocompletes e verificações de erro graças à tipagem estática.
Benefícios:

Detecção de Erros: A tipagem estática ajuda a identificar erros durante a compilação, antes que o código seja executado.
Refatoração e Manutenção: Facilita a refatoração do código e a manutenção de projetos grandes, pois os tipos ajudam a entender o código e sua estrutura.
Comparação
Tipagem: JavaScript é dinamicamente tipado, enquanto TypeScript é estaticamente tipado.
Compilação: JavaScript é executado diretamente no navegador, enquanto TypeScript precisa ser transpilado para JavaScript.
Erros: TypeScript pode detectar muitos tipos de erros antes da execução, enquanto JavaScript depende de testes e depuração em tempo de execução para encontrar problemas.

CODIGO:

typescript

function somar(a: number, b: number): number {
    return a + b;
}

const resultado: number = somar(5, 3);
console.log("Resultado:", resultado); // Saída: Resultado: 8


javascript


function somar(a, b) {
    return a + b;
}


const resultado = somar(5, 3);
console.log("Resultado:", resultado); // Saída: Resultado: 8






