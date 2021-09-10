const Sequelize = require("sequelize");
const connection = require("./configData");
const usuario = require("./userData");

const reserva = connection.define("reserva", {
  data: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  id_usuario: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: usuario,
      key: "id",
    },
  },
});

reserva.sync({ force: false });

module.exports = reserva;
