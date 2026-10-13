//Importando o arquivo de conexão
import connection from "../config/sequelize-config.js";
// Importando a biblioteca sequelize
import Sequelize from "sequelize";

const Personagem = connection.define("personagens", {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    raca: {
        type: Sequelize.STRING,
        allowNull: false
    },
    origem: {
        type: Sequelize.STRING,
        allowNull: false
    },
    papel: {
        type: Sequelize.STRING,
        allowNull: false
    },
});

Personagem.sync({ force: false });

export default Personagem;