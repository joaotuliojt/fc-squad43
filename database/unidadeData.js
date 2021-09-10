const Sequelize = require("sequelize");
const connection = require("./configData");

const unidade = connection.define("unidade", {
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

unidade.sync({ force: false });

module.exports = unidade;
