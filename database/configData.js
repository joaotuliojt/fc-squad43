const Sequelize = require("sequelize");

const connection = new Sequelize("fcallendar_2", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = connection;
