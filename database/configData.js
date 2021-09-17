const DB_SCHEMA = "";
const DB_USERNAME = "root"; //
const DB_PASSWORD = "";

const Sequelize = require("sequelize");

const connection = new Sequelize(DB_SCHEMA, DB_USERNAME, DB_PASSWORD, {
  host: "localhost",
  dialect: "mysql",
});

module.exports = connection;
