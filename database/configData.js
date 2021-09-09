const Sequelize = require("sequelize");

const connection = new Sequelize("fcallendar", "root", "", {
  host: "localhost",
 dialect: "mysql",
});

module.exports = connection;
