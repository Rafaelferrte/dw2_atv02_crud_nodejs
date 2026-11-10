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
├── .env.example     # Exemplo de variáveis de ambiente
└── index.js         # Inicialização do servidor
```

## Pré-requisitos

- Node.js e npm.
- MySQL em execução.

## Como executar

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/Rafaelferrte/dw2_atv02_crud_nodejs.git
cd dw2_atv02_crud_nodejs
npm install
```

Crie o banco de dados no MySQL:

```sql
CREATE DATABASE site_senhor_dos_aneis;
```

Copie o arquivo de exemplo para criar sua configuração local:

Linux/macOS:

```bash
cp .env.example .env
```

Windows PowerShell:

```powershell
Copy-Item .env.example .env
```

Edite o arquivo `.env` com as credenciais do seu MySQL. O arquivo não é enviado ao Git.

Inicie em modo de desenvolvimento:

```bash
npm run dev
```

Ou inicie normalmente:

```bash
npm start
```

Acesse `http://localhost:8080`.

## Observações

- A aplicação autentica a conexão com o MySQL e sincroniza os modelos antes de iniciar o servidor.
- O Sequelize utiliza `sync()` sem a opção `force`, evitando apagar as tabelas existentes.
- Nunca publique senhas ou arquivos `.env` no repositório.

## Objetivo acadêmico

Consolidar conhecimentos de desenvolvimento backend com Node.js, integração com banco de dados, organização em controllers e models e implementação de operações CRUD.
