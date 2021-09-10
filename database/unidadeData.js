const Sequelize = require("sequelize");
const connection = require("./configData");

module.exports = connection.define("unidade", {
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
