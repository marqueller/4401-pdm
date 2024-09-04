
<!-- 
**JavaScript** é uma linguagem de programação que é interpretada e usada para desenvolver sites dinâmicos e interativos. É uma linguagem de tipagem dinâmica, o que significa que você não precisa definir o tipo das variáveis explicitamente.

**TypeScript**, por outro lado, é um superconjunto do JavaScript que adiciona tipagem estática. Ou seja, você pode definir tipos para variáveis, funções e objetos, o que ajuda a detectar erros durante o desenvolvimento antes mesmo de rodar o código.

Aqui está um exemplo simples em cada linguagem:

### JavaScript

```javascript
function greet(name) {
    return "Hello, " + name;
}

console.log(greet("Alice"));
```

Neste exemplo, a função `greet` recebe um parâmetro `name`, mas o tipo do parâmetro não é especificado. O JavaScript não verifica se `name` é realmente uma string; ele apenas tenta concatenar.

### TypeScript

```typescript
function greet(name: string): string {
    return "Hello, " + name;
}

console.log(greet("Alice"));
```

Neste exemplo, a função `greet` é declarada com tipos explícitos. O parâmetro `name` deve ser uma `string`, e a função deve retornar uma `string`. Se você tentar passar algo que não seja uma string para `name`, TypeScript emitirá um erro durante a compilação.

### Resumo das Diferenças

- **Tipagem**: JavaScript é dinamicamente tipado, enquanto TypeScript é estaticamente tipado.
- **Erros**: TypeScript pode detectar erros de tipo durante a compilação, antes de você rodar o código.
- **Compilação**: TypeScript precisa ser compilado para JavaScript, pois navegadores e ambientes de execução não entendem TypeScript diretamente.
// -->

Vitória Correa da Costa 3°07