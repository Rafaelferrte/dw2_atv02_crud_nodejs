# Middle-earth CRUD

Aplicação web acadêmica desenvolvida com Node.js para praticar criação de rotas, renderização de páginas e operações CRUD com banco de dados relacional.

O sistema utiliza o universo de *O Senhor dos Anéis* como tema e organiza informações sobre personagens, localidades e filmes da Terra-média.

## Funcionalidades

- Listagem de personagens e localidades.
- Cadastro, edição e exclusão de personagens.
- Cadastro, edição e exclusão de localidades.
- Exibição de informações sobre filmes.
- Renderização de páginas com templates EJS.
- Persistência de dados com MySQL e Sequelize.

## Tecnologias

- Node.js
- Express
- EJS
- MySQL
- Sequelize
- JavaScript
- HTML e CSS

## Estrutura do projeto

```text
.
├── config/          # Configuração da conexão com o banco
├── controllers/     # Rotas e regras das funcionalidades
├── models/          # Modelos utilizados pelo Sequelize
├── public/          # Arquivos estáticos
├── views/           # Templates EJS
└── index.js         # Inicialização do servidor
```

## Configuração

O projeto utiliza MySQL. Antes de iniciar, tenha o serviço do banco em execução e confira as credenciais em `config/sequelize-config.js`.

As configurações atuais de conexão estão definidas diretamente nesse arquivo e devem ser ajustadas ao ambiente local.

## Como executar

Instale as dependências:

```bash
npm install
```

Inicie o servidor:

```bash
node index.js
```

A aplicação utiliza a porta `8080`. Após iniciar, acesse:

`http://localhost:8080`

## Objetivo acadêmico

Consolidar conhecimentos de desenvolvimento backend com Node.js, integração com banco de dados, organização em controllers e models e implementação de operações CRUD.
