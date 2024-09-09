CEDUP Renato Ramos Da Silva 
Nome:André Gusmão Thomaz DA Silva
Turma:3º7



 JavaScript: JavaScript é uma linguagem de programação amplamente usada para criar interatividade em websites. Originalmente desenvolvido para rodar em navegadores web, ele permite adicionar funcionalidades dinâmicas, como animações, validações de formulários e interações com o usuário.

 Principais características do JavaScript:

Interatividade: Permite que páginas web respondam a ações do usuário, como cliques e preenchimento de formulários.
Manipulação do DOM: Facilita a alteração de elementos HTML e a atualização de estilos e conteúdo da página.
Assíncrono: Suporta operações assíncronas, como requisições de rede e temporizadores, permitindo uma experiência mais fluida para o usuário.
Versatilidade: Pode ser usado tanto no navegador quanto no servidor, e é compatível com uma ampla gama de frameworks e bibliotecas

Código em Java Script:
<!-- <!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exemplo Simples de JavaScript</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        #message {
            font-size: 1.2em;
            color: blue;
        }
    </style>
</head>
<body>
    <h1>Bem-vindo ao Meu Site!</h1>
    <p id="message">Clique no botão para ver uma mensagem.</p>
    <button onclick="showMessage()">Clique Aqui</button>

    <script>
        function showMessage() {
            // Altera o conteúdo do parágrafo com o id "message"
            document.getElementById('message').textContent = 'Olá! Você clicou no botão!';
        }
    </script>
</body>
</html> -->

Typescript:  TypeScript é uma linguagem de programação desenvolvida pela Microsoft que é um superset de JavaScript. Isso significa que todo código JavaScript válido também é código TypeScript válido, mas TypeScript adiciona recursos adicionais para melhorar a experiência de desenvolvimento.

Principais características do TypeScript:
Tipagem Estática:

Tipos: TypeScript permite a definição explícita de tipos de variáveis, funções e objetos. Isso ajuda a detectar erros em tempo de desenvolvimento e facilita a manutenção do código.
Inferência de Tipos: Mesmo que você não defina tipos explicitamente, o TypeScript pode inferir tipos com base no valor inicial.
Desenvolvimento mais Seguro:

Compilação: O código TypeScript é transpilado (ou convertido) para JavaScript. Isso significa que você pode usar recursos avançados de TypeScript e ainda executar o código em qualquer ambiente que suporte JavaScript.
Erros em Tempo de Desenvolvimento: A verificação de tipos e a análise estática ajudam a identificar erros antes que o código seja executado.
Melhor Ferramenta e Suporte a IDE:

IntelliSense: Ferramentas de desenvolvimento, como Visual Studio Code, oferecem suporte melhorado com sugestões de código, autocompletar e refatoração com base nas informações de tipo.

Código simples:

interface Pessoa {
    nome: string;
    idade: number;
}

function saudacao(pessoa: Pessoa): string {
    return `Olá, meu nome é ${pessoa.nome} e eu tenho ${pessoa.idade} anos.`;
}

const pessoa: Pessoa = {
    nome: 'Ana',
    idade: 30
};

console.log(saudacao(pessoa));
