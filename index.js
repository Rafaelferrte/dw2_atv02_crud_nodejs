// Importando o express
import express from "express";
import connection from "./config/sequelize-config.js";
const app = express();

// Configurando o EJS
app.set("view engine", "ejs");

app.use(express.static("public")); //Puxando pasta publica

app.get("/", function (req, res) {
  res.render("index");
});

import FilmeController from "./controllers/FilmeController.js";
import PersonagemController from "./controllers/PersonagemController.js";
import LocalController from "./controllers/LocalController.js";

import Local from "./models/Local.js";
import Personagem from "./models/Personagem.js";

app.use(express.urlencoded({ extended: false }));

app.use("/", FilmeController);
app.use("/", PersonagemController);
app.use("/", LocalController);

// Realizando a conexão com o banco de dados
connection
  .authenticate()
  .then(() => {
    console.log("Conexão com o banco de dados realizada com sucesso!");
  })
  .catch((error) => {
    console.log(
      `Ocorreu um erro ao se conectar ao banco de dados. Erro: ${error}`,
    );
  });

// Criando o banco de dados se ele não existir
const DB_NAME = "site_senhor_dos_aneis";
connection
  .query(`CREATE DATABASE IF NOT EXISTS ${DB_NAME};`)
  .then(() => {
    console.log(`O bando de dados ${DB_NAME} está criado!`);
  })
  .catch((error) => {
    console.log(`Ocorreu um erro ao criar o banco de dados. Erro: ${error}`);
  });

// Informando a porta que será utilizada
const port = 8080;
app.listen(port, function (erro) {
  if (erro) {
    console.log("Ocorreu um erro!");
  } else {
    console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`);
  }
});
