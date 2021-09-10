const express = require("express");
const app = express();
const configData = require("./database/configData");
const routes = require("./routes");

configData
  .authenticate()
  .then(() => {
    console.log("Conexão feita com o BD");
  })
  .catch((msgErro) => {
    console.log(msgErro);
  });

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
