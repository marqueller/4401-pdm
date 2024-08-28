
JavaScript é uma linguagem de programação amplamente utilizada para o desenvolvimento de aplicações web. Originalmente criada para adicionar interatividade a páginas HTML, ela evoluiu para ser usada tanto no lado do cliente quanto no lado do servidor (com Node.js). JavaScript é uma linguagem interpretada, de tipagem dinâmica e é suportada pela maioria dos navegadores modernos.

TypeScript é uma linguagem de programação que se baseia no JavaScript, adicionando tipagem estática e outras funcionalidades avançadas. Desenvolvida pela Microsoft, o TypeScript é um superconjunto de JavaScript, o que significa que todo código JavaScript válido também é válido em TypeScript. A principal vantagem do TypeScript é a detecção de erros em tempo de desenvolvimento, o que ajuda a criar código mais robusto e menos propenso a erros.

Principais diferenças:

Tipagem: TypeScript adiciona tipagem estática, permitindo que desenvolvedores definam os tipos de variáveis, funções e parâmetros.
Compatibilidade: O código TypeScript é compilado para JavaScript, o que garante compatibilidade com todos os ambientes que suportam JavaScript.
Ferramentas de Desenvolvimento: TypeScript oferece melhor suporte a IDEs, com autocompletar, navegação de código e detecção de erros.

function greet(name: string): string {
    if (typeof name !== "string" || name.trim() === "") {
        return "Entrada inválida, por favor forneça um nome como string.";
    }

    const greetingMessage: string = "Olá, " + name + "! Bem-vindo à nossa aplicação.";
    
    const currentTime: number = new Date().getHours();
    let timeOfDay: string;

    if (currentTime < 12) {
        timeOfDay = "manhã";
    } else if (currentTime < 18) {
        timeOfDay = "tarde";
    } else {
        timeOfDay = "noite";
    }

    return greetingMessage + " Boa " + timeOfDay + "!";
}