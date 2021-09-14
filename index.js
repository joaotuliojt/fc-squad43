const express = require("express");
const app = express();
const configData = require("./database/configData");
const routes = require("./routes");
const Usuario = require("./database/userData");
const Unidade = require("./database/unidadeData");

app.use(express.urlencoded());
app.use(express.json());

configData
  .authenticate()
  .then(() => {
    Usuario.count().then((n) => {
      if (n < 1) {
        Usuario.create({
          nome: "Usuário Teste",
          email: "teste@fcamara.com",
          senha: "13850",
        }).then(() => {
          console.log("Usuário Padrão Criado!");
        });
      }
      Unidade.count().then((n) => {
        if (n < 1) {
          criaUnidade("São Paulo", 600);
          criaUnidade("Santos", 100);
        }
      });
    });
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

function criaUnidade(nome, capacidade) {
  Unidade.create({ nome: nome, capacidade: capacidade }).then(() => {
    console.log("Unidade padrão criada");
  });
}
