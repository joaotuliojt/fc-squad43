const Sequelize = require("sequelize");
const connection = require("./configData");

module.exports = connection.define("reserva", {
  data: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  id_usuario: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: "usuario",
      key: "id",
    },
  },
});
