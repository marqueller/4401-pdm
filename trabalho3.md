<!-- 

### 1. **Tipagem**

- **JavaScript**: É uma linguagem de tipagem dinâmica. Isso significa que você não precisa especificar o tipo de uma variável quando a define; o tipo é determinado em tempo de execução. Por exemplo, você pode mudar o tipo de uma variável de um número para uma string sem problemas:
  ```javascript
  let x = 5;
  x = "Hello";
  ```

- **TypeScript**: É uma linguagem de tipagem estática e opcional. Isso significa que você pode especificar os tipos das variáveis, funções e objetos, e o TypeScript verificará esses tipos em tempo de compilação. Isso ajuda a detectar erros antes de o código ser executado. Exemplo:
  ```typescript
  let x: number = 5;
  x = "Hello"; // Erro de compilação
  ```

### 2. **Compilação**

- **JavaScript**: É interpretado diretamente pelos navegadores e motores de JavaScript, como o Node.js. Não requer um passo de compilação adicional.

- **TypeScript**: Precisa ser compilado para JavaScript antes de ser executado. O compilador TypeScript (`tsc`) transforma o código TypeScript em JavaScript, que então pode ser executado em qualquer ambiente que suporte JavaScript.

### 3. **Sintaxe e Recursos**

- **JavaScript**: A linguagem tem uma sintaxe mais simples e menos recursos avançados em comparação com TypeScript. No entanto, com o tempo, novas versões do ECMAScript (como ES6 e ES7) adicionaram recursos mais avançados, mas nem todos os navegadores suportam as últimas versões.

- **TypeScript**: Inclui recursos adicionais como interfaces, tipos genéricos, e enums, além de suportar novas funcionalidades do ECMAScript antes que estejam amplamente disponíveis. TypeScript também tem suporte para recursos de programação orientada a objetos, como classes e herança, de forma mais robusta.

### 4. **Ferramentas e IDEs**

- **JavaScript**: Tem um bom suporte em várias ferramentas e IDEs, mas a verificação de tipos e a inteligência do código são menos avançadas em comparação com TypeScript.

- **TypeScript**: Oferece melhor suporte para ferramentas e IDEs devido à verificação de tipos estáticos. Isso significa que você pode obter sugestões de código mais precisas e detecção de erros em tempo real enquanto escreve código.

### 5. **Desenvolvimento em Grande Escala**

- **JavaScript**: Pode ser mais propenso a erros em projetos grandes devido à ausência de verificação de tipos e ao dinamismo da linguagem.

- **TypeScript**: É frequentemente preferido em projetos grandes e complexos devido à sua tipagem estática e verificação de tipos, o que ajuda a melhorar a manutenibilidade e a clareza do código.


 -->
// Função em JavaScript
function soma(a, b) {
    return a + b;
}

// Usando a função
let resultado = soma(5, 10);
console.log(resultado); // Saída: 15

// Alterando o tipo da variável 'resultado' para uma string
resultado = "Agora é uma string";
console.log(resultado); // Saída: Agora é uma string

// Função em TypeScript
function soma(a: number, b: number): number {
    return a + b;
}

// Usando a função
let resultado: number = soma(5, 10);
console.log(resultado); // Saída: 15

// Tentando alterar o tipo da variável 'resultado' para uma string
// resultado = "Agora é uma string"; // Erro de compilação: Type 'string' is not assignable to type 'number'.