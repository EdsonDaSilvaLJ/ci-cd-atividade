# Atividade Prática: CI/CD com GitHub Actions e GitHub Pages

## Contexto

Você recebeu uma aplicação de bloco de notas já funcional, feita em Vue.js. Ela não tem backend nem banco de dados — é um site estático, o que a torna um candidato perfeito para ser publicado no GitHub Pages.

O código da aplicação está pronto. Seu trabalho nesta atividade não é alterar a aplicação, e sim construir o pipeline que garante a qualidade do código e o publica automaticamente.

## O que você precisa entregar

Um workflow do GitHub Actions que, a cada alteração enviada para o repositório, faça o seguinte, nesta ordem:

1. **Instale as dependências** do projeto.
2. **Execute a suíte de testes automatizados.** Se algum teste falhar, o processo deve parar aqui — nada deve ser publicado.
3. **Gere a build de produção** da aplicação.
4. **Publique o resultado da build no GitHub Pages**, de forma que a aplicação fique acessível por uma URL pública.

O pipeline deve rodar automaticamente sempre que houver um push na branch principal. Como critério extra (opcional), considere também rodar os testes em pull requests, sem publicar nada — só para validar antes do merge.

## Critérios de aceite

- [ ] Existe um workflow versionado no repositório que é disparado automaticamente por push na branch principal.
- [ ] O workflow instala as dependências corretamente.
- [ ] O workflow executa os testes automatizados como uma etapa explícita do pipeline.
- [ ] Se os testes falharem, o deploy não acontece.
- [ ] O workflow gera a build de produção da aplicação.
- [ ] A build é publicada no GitHub Pages e a aplicação abre corretamente pela URL pública (sem tela branca, sem erros no console).
- [ ] É possível ver o histórico de execuções do pipeline na aba "Actions" do repositório, com runs concluídos com sucesso.

## O que você vai precisar pesquisar

Você não precisa adivinhar do zero — pesquise e leia a documentação. Alguns pontos que vão te ajudar a se orientar:

- Como é estruturado um arquivo de workflow do GitHub Actions (onde ele fica, quando é disparado, como são definidas as etapas/jobs).
- Como configurar um ambiente Node.js dentro de um job do Actions.
- A diferença entre publicar o GitHub Pages a partir de uma branch (ex: `gh-pages`) e publicar via Actions diretamente — e qual delas o seu workflow vai usar.
- Como restringir uma etapa do pipeline para que só seja executada se a etapa anterior tiver sucesso.
- Como conferir, na própria interface do GitHub, se um workflow rodou e qual foi o resultado.

## Dica

Antes de tentar publicar a aplicação, rode os comandos de instalação, teste e build na sua própria máquina. Se eles funcionarem localmente, é sinal de que o pipeline também tem grande chance de funcionar — e fica muito mais fácil depurar um problema local do que um problema que só aparece dentro do Actions.

## Fora do escopo

Não é necessário (e não é esperado) alterar a aplicação Vue.js, adicionar novas funcionalidades ao bloco de notas, ou escrever novos testes. O foco da atividade é inteiramente o pipeline.


# Comandos

Instalar as dependências (só precisa uma vez):
```
npm install
```

Rodar a aplicação localmente:
```
npm test
```

E para gerar a build de produção (o que o pipeline de CI/CD vai precisar fazer antes do deploy):
```
npm run build
```
O resultado fica na pasta dist/, pronta para ser publicada como site estático.