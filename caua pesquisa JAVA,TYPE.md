Typescript é uma linguagem de código aberto derivada da JavaScript q foi desenvolvida pela Microsoft. Ela é uma ferramenta q tem diversas formas de adicionar recursos de tipagem estáticas,sendo mais fácil de desenvolver códigos mais claros e eficientes.

JavaScript é a linguagem de programação mais famosa e uma das mais utilizadas,mesmo sendo de nível de complexibilidade alto. Também muito conhecida por se utilizar linguagens de marcação como HTML e CSS, podendo assim fazer diversas tabelas,escritas coloridas,imagens em movimento ,conteúdo 2D ,3D e conteúdos multimídia.

A diferença entre as duas linguagens é que a Typescript é uma linguagem mais fácil diferente da Java q é complexa,além da tipagem do Java q é dinâmica a Type é mais estática. Type utiliza namespaces e decorators enquanto Java utiliza funções construtoras.

-Código Javascript:

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exemplo de JavaScript</title>
</head>
<body>
    <h1 id="saudacao">Olá, ALEX!</h1>
    <button onclick="mudarSaudacao()">Clique para mudar a saudação</button>

    <script>
        // Exibir mensagem de boas-vindas no console
        console.log("Bem-vindo ao exemplo de JavaScript!");

        // Função para alterar o conteúdo do elemento HTML
        function mudarSaudacao() {
            var elemento = document.getElementById("saudacao");
            elemento.innerText = "Você clicou no botão!";
        }
    </script>
</body>
</html>


-Código Typescript 


<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exemplo de TypeScript</title>
</head>
<body>
    <h1 id="saudacao">Olá, alexinho!</h1>
    <button id="botao">Clique para mudar a saudação</button>

    <script src="dist/app.js"></script>
</body>
</html>