const Sequelize = require("sequelize");
const connection = require("./configData");

const unidade = connection.define("unidade", {
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  capacidade: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

unidade.sync({ force: false });

module.exports = unidade;
