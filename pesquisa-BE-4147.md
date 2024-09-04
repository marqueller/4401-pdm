O que é JavaScript? JavaScript é uma linguagem de programação de alto nível, interpretada e baseada em protótipos. É uma das principais linguagens usadas no desenvolvimento web para criar e gerenciar o comportamento dinâmico das páginas da web. Originalmente criado por Brendan Eich e lançado em 1995 pela Netscape, JavaScript é uma das linguagens fundamentais da web, ao lado de HTML e CSS.

Principais Características Linguagem Interpretada: JavaScript é executado diretamente pelo navegador ou pelo ambiente de execução (como Node.js) sem a necessidade de compilação.

Tipagem Dinâmica: Não é necessário declarar o tipo das variáveis. O tipo é determinado em tempo de execução.

Baseado em Protótipos: Em vez de classes tradicionais (embora ES6 tenha introduzido classes sintáticas), JavaScript usa um sistema baseado em protótipos para herança e criação de objetos.

Eventos e Manipulação do DOM: JavaScript é amplamente utilizado para manipular o DOM (Document Object Model) e responder a eventos como cliques, carregamentos de páginas e interações do usuário.

Assíncrono e Concorrente: Possui suporte para programação assíncrona com callbacks, Promises e async/await, o que permite lidar com operações de I/O e temporizadores sem bloquear o fluxo principal de execução.

Funções de Primeira Classe: Funções em JavaScript podem ser atribuídas a variáveis, passadas como argumentos para outras funções e retornadas de funções.

Evolução do JavaScript ECMAScript (ES): JavaScript segue o padrão ECMAScript, que é atualizado periodicamente. Algumas versões importantes incluem:

ES3 (1999): Adicionou muitas funcionalidades importantes e melhorias de sintaxe. ES5 (2009): Introduziu melhorias como JSON, métodos de array mais poderosos e "strict mode". ES6 (2015): Também conhecido como ECMAScript 2015, trouxe grandes melhorias, como classes, módulos, let e const, arrow functions, Promises, e muito mais. ES7 (2016) e posteriores: Continuaram adicionando novas funcionalidades, como async/await, métodos de array adicionais, e operadores de exponenciação. Desenvolvimento de Frameworks e Bibliotecas:

jQuery: Facilitou a manipulação do DOM e a realização de requisições AJAX. React, Angular e Vue: São bibliotecas e frameworks modernos que ajudam na criação de interfaces de usuário dinâmicas e complexas. Node.js: Lançado em 2009, permite que JavaScript seja usado no lado do servidor, tornando possível escrever aplicações de servidor em JavaScript.

Código:

<title>Exemplo de JavaScript</title>

<script>
    // Função para alterar o texto do título
    function alterarTexto() {
        document.getElementById('titulo').textContent = 'Texto alterado!';
    }

    // Adicionar um listener de evento ao botão
    document.getElementById('botao').addEventListener('click', alterarTexto);
</script>

O que é TypeScript? TypeScript é um superconjunto de JavaScript que adiciona digitação estática opcional e recursos avançados ao JavaScript. Foi desenvolvido pela Microsoft e lançado inicialmente em outubro de 2012. Desde o seu lançamento em 2012, ele ganhou rapidamente ampla adoção na comunidade de desenvolvimento web.

De acordo com a pesquisa de desenvolvedores Stack Overflow de 2022, TypeScript emergiu como a 4ª tecnologia mais amada, com 73,46%. TypeScript foi criado para resolver algumas das limitações do JavaScript, como sua falta de digitação forte, que pode levar a erros sutis que são difíceis de pegar durante o desenvolvimento.

Por exemplo, considere o seguinte código JavaScript:

function add(a, b) { return a + b; }

let result = add(10, "20"); // No error, but result is "1020" instead of 30 O código acima cria uma função add, cuja digitação é dinâmica. O tipo dos argumentos a e b não é aplicado. Como resultado, passar uma string de caracteres em vez de um número como argumento não produz um erro, mas concatena os valores como strings de caracteres, levando a um comportamento inesperado.

Com o TypeScript, a digitação estática opcional é introduzida, permitindo que os desenvolvedores especifiquem os tipos de variáveis, parâmetros de função e valores de retorno, detectando erros relacionados a tipos durante o desenvolvimento.

function add(a: number, b: number): number { return a + b; }

let result = add(10, "20"); // Error: Argument of type 'string' is not assignable to parameter of type 'number' No código TypeScript acima, os tipos de parâmetros a e b são explicitamente definidos como números. Se uma string for passada como argumento, o TypeScript irá gerar um erro de tempo de build, fornecendo feedback antecipado para detectar possíveis problemas.

Info A Microsoft continua ativamente envolvida na manutenção e no aprimoramento do TypeScript, lançando regularmente novas versões com recursos aprimorados e melhor desempenho, como a versão mais recente, o TypeScript 5.0.

Recursos do TypeScript O TypeScript oferece vários recursos avançados para o desenvolvimento moderno da web que abordam algumas das limitações do JavaScript. Esses recursos oferecem experiência aprimorada para o desenvolvedor e organização do código. Eles incluem:

Digitação estática Digitação opcional Recursos ES6+ Organização do código Recursos de programação orientada a objetos (OOP) Sistema de tipos avançado Compatibilidade com JavaScript

Digitação estática O TypeScript tem um forte sistema de digitação que permite especificar os tipos de variáveis e parâmetros de função em runtime. Isso permite a detecção precoce de erros relacionados ao tipo, tornando o código mais confiável e menos propenso a bugs.
No JavaScript, por outro lado, a digitação das variáveis é dinâmica, o que significa que seu tipo pode mudar durante o tempo de execução.

Por exemplo, o código JavaScript abaixo mostra a declaração de duas variáveis que são dinamicamente digitadas como número e string:

let num1 = 10; // num1 is dynamically typed as a number let num2 = "20"; // num2 is dynamically typed as a string

let result = num1 + num2; // No error at compile-time console.log(result); // Output: "1020" O código acima produzirá “1020”, uma concatenação de número e string de caracteres. Essa não é a saída esperada, o que significa que isso pode afetar seu código. A desvantagem do JavaScript é que ele não gera nenhum erro. Você pode corrigir isso com o TypeScript especificando os tipos de cada variável:

let num1: number = 10; // num1 is statically typed as a number let num2: string = "20"; // num2 is statically typed as a string

let result = num1 + num2; // Error: Type 'string' is not assignable to type 'number' No código acima, uma tentativa de concatenar um número e uma string de caracteres usando o operador + resulta em um erro runtime, pois o TypeScript impõe uma verificação rigorosa do tipo.

Isso ajuda a detectar possíveis erros relacionados a tipos antes de executar o código, resultando em um código mais robusto e livre de erros.

Digitação opcional O TypeScript oferece flexibilidade para que você escolha usar ou não a digitação estática. Isso significa que você pode optar por especificar tipos para variáveis e parâmetros de função ou deixar o TypeScript inferir os tipos automaticamente com base no valor atribuído.
Por exemplo:

let num1: number = 10; // num1 is statically typed as a number let num2 = "20"; // num2 is dynamically typed as a string

let result = num1 + num2; // Error: Operator '+' cannot be applied to types 'number' and 'string' Neste código, o tipo de num2 é inferido como string com base no valor atribuído, mas você pode optar por especificar o tipo, se desejar.

Você também pode definir o tipo como any, o que significa que ele aceita qualquer tipo de valor:

let num1: number = 10; let num2: any = "20";

let result = num1 + num2; // Error: Operator '+' cannot be applied to types 'number' and 'string' 3. Recursos ES6+ O TypeScript oferece suporte para recursos modernos de JavaScript, incluindo aqueles introduzidos no ECMAScript 6 (ES6) e versões posteriores.

Isso permite que os desenvolvedores escrevam códigos mais limpos e expressivos usando recursos como funções de seta, desestruturação, literais de modelo e muito mais, com verificação de tipo adicional.

Por exemplo:

const greeting = (name: string): string => { return Hello, ${name}!; // Use of arrow function and template literal };

console.log(greeting("John")); // Output: Hello, John! Neste código, a função de seta e o literal de modelo são usados perfeitamente. O mesmo se aplica a toda a sintaxe do JavaScript.

Organização do código No JavaScript, a organização do código em arquivos separados e o gerenciamento de dependências podem se tornar um desafio à medida que a base de código cresce. No entanto, o TypeScript oferece suporte integrado para módulos e namespaces para que você organize melhor o código.
Os módulos permitem o encapsulamento do código em arquivos separados, facilitando o gerenciamento e a manutenção de grandes bases de código.

Aqui está um exemplo:

// greeting.ts: export function greet(name: string): string { // Export a function from a module return Hello, ${name}!; }

// app.ts: import { greet } from "./greeting"; // Import from a module

console.log(greet("John")); // Output: Hello, John! No exemplo acima, temos dois arquivos separados: greeting.ts e app.ts. O arquivo app.ts importa a função greet do arquivo greeting.ts usando a instrução import. O arquivo greeting.ts exporta a função greet usando a palavra-chave export, tornando acessível para importação em outros arquivos.

Isso permite uma melhor organização do código e a separação das preocupações, facilitando o gerenciamento e a manutenção de grandes bases de código.

Os namespaces no TypeScript oferecem uma maneira de agrupar códigos relacionados e evitar a poluição global de namespaces. Eles podem ser usados para definir um contêiner para um conjunto de classes, interfaces, funções ou variáveis relacionadas.

export interface Tarefa { id: number; descricao: string; concluida: boolean; }

import { Tarefa } from './interface';

class TarefaManager { private tarefas: Tarefa[] = []; private proximoId: number = 1;

adicionarTarefa(descricao: string): void {
    const novaTarefa: Tarefa = {
        id: this.proximoId++,
        descricao: descricao,
        concluida: false
    };
    this.tarefas.push(novaTarefa);
}

listarTarefas(): void {
    console.log('Lista de Tarefas:');
    this.tarefas.forEach(tarefa => {
        console.log(`${tarefa.id}: ${tarefa.descricao} [${tarefa.concluida ? 'Concluída' : 'Pendente'}]`);
    });
}

marcarComoConcluida(id: number): void {
    const tarefa = this.tarefas.find(t => t.id === id);
    if (tarefa) {
        tarefa.concluida = true;
    } else {
        console.log(`Tarefa com id ${id} não encontrada.`);
    }
}
// Exemplo de uso const manager = new TarefaManager(); manager.adicionarTarefa('Estudar TypeScript'); manager.adicionarTarefa('Revisar código'); manager.listarTarefas(); manager.marcarComoConcluida(1); manager.listarTarefas(); 
