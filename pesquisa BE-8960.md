JavaScript é uma linguagem de programação usada principalmente para adicionar interatividade a páginas da web. Ela é executada pelo navegador e pode ser usada tanto no lado do cliente quanto no servidor. É flexível, orientada a objetos e uma das principais tecnologias da web, junto com HTML e CSS.

<!DOCTYPE html>
<html>
<head>
    <title>Exemplo de JavaScript</title>
</head>
<body>

<h1>Olá, Mundo!</h1>

<button onclick="mostrarMensagem()">Clique aqui</button>

<script>
    function mostrarMensagem() {
        alert("Você clicou no botão!");
    }
</script>

</body>
</html>

TypeScript é uma linguagem que expande o JavaScript, adicionando tipagem estática e outros recursos avançados. Ele permite definir tipos para variáveis e funções, ajudando a evitar erros antes da execução. O código TypeScript é compilado para JavaScript, que é o que os navegadores entendem.

exemplo de Typescript: 


function somar(a: number, b: number): number {
    return a + b;
}

const resultado = somar(5, 10);
console.log(O resultado é: ${resultado});