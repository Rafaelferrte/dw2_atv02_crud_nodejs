import express from "express";
import connection from "./config/sequelize-config.js";

import FilmeController from "./controllers/FilmeController.js";
import PersonagemController from "./controllers/PersonagemController.js";
import LocalController from "./controllers/LocalController.js";

import "./models/Local.js";
import "./models/Personagem.js";

const app = express();
const PORT = Number(process.env.PORT || 8080);

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("index");
});

app.use("/", FilmeController);
app.use("/", PersonagemController);
app.use("/", LocalController);

async function startServer() {
  try {
    await connection.authenticate();
    console.log("Conexão com o banco de dados realizada com sucesso!");

    await connection.sync();
    console.log("Tabelas sincronizadas com sucesso!");

    app.listen(PORT, () => {
      console.log(`Servidor iniciado em http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Não foi possível iniciar a aplicação:", error.message);
    process.exit(1);
  }
}

startServer();
