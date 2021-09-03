const express = require("express");
const app = express();

//Setando ejs como view engine
app.set('view engine', 'ejs');
//Define Pasta public como padão para documentos static
app.use(express.static('public'));

//Chamando rotas
app.use('/',require('./routes/index'));

app.get('/login',require('./controllers/usuarioController').login);


//Rodando servidor
app.listen(8080, ()=>{
  console.log('App rodando!');
});

