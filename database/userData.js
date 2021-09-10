const Sequelize = require("sequelize");
const connection = require("./configData");

module.exports = connection.define("usuario", {
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
    allowNull: false,
    references: {
      model: "unidade",
      key: "id",
    },
  },
});
