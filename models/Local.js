//Importando o arquivo de conexão
import connection from "../config/sequelize-config.js";
// Importando a biblioteca sequelize
import Sequelize from "sequelize";

const Local = connection.define("locais", {
    local: {
        type: Sequelize.STRING,
        allowNull: false
    },
    regiao: {
        type: Sequelize.STRING,
        allowNull: false
    },
    habitantes: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: false
    },
});

Local.sync({ force: false });

export default Local;