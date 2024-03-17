# legaltest
Teste de desenvolvimento - Estágio
>Status: ✅Finalizado

## Objetivo
Desenvolver uma pagina web que liste, adicione e remova produtos de um carrinho utilizando React.

## Passo-a-Passo

No seu terminal inicie o app através da command line

```console
npm start
```

Com o app iniciado, agora temos que alimentar nossa database com o arquivo json, abra uma nova aba de terminal, acesse o diretório ./frontend e digite:

```console
npx json-server --watch .\data\products.json --port 8000
```

Em caso da porta 8000 não estar disponivel, mude o parametro e depois em seu IDE de preferencia, vá para o arquivo ./src/home.js na linha 24:

```js
fetch('http://localhost:PORT/products')
```

Altere a porta do localhost para a desejada.
