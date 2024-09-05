Diferença entre TypeScript e Javascript:

TypeScript e JavaScript são duas linguagens intimamente relacionadas, mas com diferenças fundamentais. JavaScript é uma linguagem de tipagem dinâmica e fraca, o que significa que as variáveis não têm um tipo fixo e podem mudar durante a execução, levando a possíveis erros de tipo que só se manifestam em tempo de execução. Por outro lado, TypeScript é um superset de JavaScript que adiciona tipagem estática, permitindo a definição explícita de tipos para variáveis, funções e objetos, o que ajuda a detectar erros durante a fase de compilação, antes da execução do código. Enquanto JavaScript é interpretado e executado diretamente pelos navegadores e ambientes como Node.js, TypeScript requer uma etapa de compilação para transformar o código em JavaScript padrão. TypeScript também oferece recursos adicionais, como interfaces, enums e generics, que são ausentes no JavaScript e que proporcionam uma maneira mais robusta e segura de lidar com estruturas complexas e abstrações. Além disso, TypeScript integra-se bem com IDEs modernas, oferecendo ferramentas avançadas como autocompletar e verificação de erros em tempo real, o que pode melhorar a produtividade e a manutenção do código, especialmente em projetos de grande escala.

Código em TypeScript:


interface Formulario {
    nome: string;
    idade: number;
}

function validarFormulario(dados: Formulario): string[] {
    const erros: string[] = [];
    
    if (dados.nome.trim().length === 1) {
        erros.push("O nome não pode estar vazio.");
    }
    
    if (dados.idade < 1 || dados.idade > 125) {
        erros.push("A idade deve estar entre 1 e 125.");
    }

    return erros;
}

const dadosFormulario: Formulario = {
    nome: "Gabriel",
    idade: 19
};

const erros = validarFormulario(dadosFormulario);
if (erros.length > 0) {
    console.log("Formulário inválido:", erros);
} else {
    console.log("O formulário é válido!");
}



