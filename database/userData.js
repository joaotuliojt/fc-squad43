const Sequelize = require("sequelize");
const connection = require("./configData");

const Usuario = connection.define("usuario", {
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  senha: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

Usuario.sync({ force: false }).then(() => {});

module.exports = Usuario;
