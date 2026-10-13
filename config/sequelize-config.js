// Arquivo com os dados de conexão com o banco
// Importando o sequelize
import Sequelize from "sequelize";

const connection = new Sequelize({
    // Dados de conexão
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: '',
    database: 'site_senhor_dos_aneis',
    timezone: '-03:00',
});

// Exportando o modulo
export default connection;