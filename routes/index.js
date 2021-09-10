const router = require("express").Router();

const Unidade = require("../database/unidadeData");
const Reserva = require("../database/reservaData");
const Usuario = require("../database/userData");

const session = require("express-session");

router.use(
  session({
    secret: "Keep it secret",
    name: "sessionID",
    saveUninitialized: false,
  })
);

//Rotas
router.get("/", (req, res) => {
  res.redirect("login");
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.post("/login", (req, res) => {
  let email = req.body.email;
  let senha = req.body.password;

  Usuario.findOne({
    where: { email, senha },
  }).then((user) => {
    if (user) {
      req.session.login = user.id;
      res.render("initial", { nome: user.nome });
    } else {
      res.render("login");
    }
  });
});

router.get("/sedes", (req, res) => {
  res.render("sedes");
});

router.get("/historic", (req, res) => {
  res.render("historic");
});

router.get("/reserve", (req, res) => {
  res.render("reserve");
});

router.get("/initial", (req, res) => {
  console.log(req.session.login);
  if (req.session.login) {
    res.render("initial");
  } else {
    res.render("login");
  }
});

router.get("/profile", (req, res) => {
  res.render("profile");
});

router.get("/profile/edit", (req, res) => {
  res.render("profileEdit");
});

module.exports = router;
