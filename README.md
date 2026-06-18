# Bloco de Notas

Aplicação simples de bloco de notas feita em Vue 3 + Vite. Não há backend nem banco de dados: as notas são mantidas em memória e persistidas no `localStorage` do navegador.

## Funcionalidades

- Adicionar nota (título + conteúdo)
- Listar notas
- Editar nota
- Excluir nota
- Persistência local (localStorage)

## Rodando localmente

```bash
npm install
npm run dev
```

A aplicação abre em `http://localhost:5173`.

## Testes

O projeto usa [Vitest](https://vitest.dev/) e `@vue/test-utils`.

```bash
npm test
```

## Build de produção

```bash
npm run build
```

O resultado fica na pasta `dist/`, pronta para ser publicada como site estático (ex: GitHub Pages).

## Estrutura

```
src/
  components/    componentes de UI (formulário, lista, item de nota)
  composables/    useNotes.js — toda a lógica de adicionar/editar/remover/persistir notas
  App.vue
  main.js
tests/             testes automatizados (Vitest)
```

## Sobre a atividade de CI/CD

Este repositório contém a aplicação já pronta. O que falta implementar é o pipeline de CI/CD. Veja o arquivo `ATIVIDADE.md` com o enunciado completo.
