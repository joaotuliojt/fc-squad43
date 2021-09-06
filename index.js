const express = require("express");
const app = express();
const configData = require("./database/configData");
const routes = require("./routes");

//Setando ejs como view engine
app.set("view engine", "ejs");
//Define Pasta public como padão para documentos static
app.use(express.static("public"));

//Chamando rotas
app.use(routes);

//Rodando servidor
app.listen(8080, () => {
  console.log("App rodando!");
});
