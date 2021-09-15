const Sequelize = require("sequelize");
const connection = require("./configData");
const unidade = require("./unidadeData");

const usuario = connection.define("usuario", {
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
  unidade_id: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  foto: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

usuario.sync({ force: false });

module.exports = usuario;
