const express = require('express');
const app = express();

//Setando ejs como view engine
app.set('view engine', 'ejs');
//Define Pasta public como padão para documentos static
app.use(express.static('public'));

app.get('/',(req,res)=>{
  res.render('index');
});
//Retorna no console caso não haja erro
app.listen(8080,()=>{
  console.log('App rodando!');
})