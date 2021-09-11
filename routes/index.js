const router = require("express").Router();

const Unidade = require("../database/unidadeData");
const Reserva = require("../database/reservaData");
const Usuario = require("../database/userData");

const session = require("express-session");
const flash = require("connect-flash");

router.use(
  session({
    secret: "senha123",
    resave: true,
    saveUninitialized: false,
  })
);

router.use(flash());

router.get("/sair", (req, res) => {
  req.session.user = undefined;
  res.redirect("/login");
});

//Rotas
router.get("/", (req, res) => {
  res.redirect("login");
});

router.get("/login", (req, res) => {
  if (req.session.user) {
    let nome = req.session.user.nome;
    res.redirect("initial", { nome }, (err, html) => {});
  } else {
    res.render("login");
  }
});

router.post("/login", (req, res) => {
  let email = req.body.email;
  let senha = req.body.password;

  Usuario.findOne({
    where: { email, senha },
  }).then((user) => {
    if (user) {
      req.session.user = user;
      res.redirect("initial");
    } else {
      res.render("login");
    }
  });
});

router.get("/initial", (req, res) => {
  if (req.session.user) {
    let nome = req.session.user.nome;
    res.render("initial", { nome });
  } else {
    res.redirect("login");
  }
});

router.get("/sedes", (req, res) => {
  if (req.session.user) {
    res.render("sedes");
  } else {
    res.redirect("/login");
  }
});

router.get("/historic", (req, res) => {
  if (req.session.user) {
    res.render("historic");
  } else {
    res.redirect("/login");
  }
});

router.get("/reserve", (req, res) => {
  if (req.session.user) {
    res.render("reserve");
  } else {
    res.redirect("/login");
  }
});

router.post("/reserve", (req, res) => {
  let data = req.body.data;
  let idUnidade = req.body.unidade;
  res.redirect("/reserve#openModal");
});

router.get("/profile", (req, res) => {
  if (req.session.user) {
    res.render("profile", { user: req.session.user });
  } else {
    res.redirect("/login");
  }
});

router.get("/profile/edit", (req, res) => {
  if (req.session.user) {
    res.render("profileEdit", { user: req.session.user });
  } else {
    res.redirect("/login");
  }
});

router.post("/profile/edit", (req, res) => {
  let nome = req.body.nome;
  let unidade = req.body.radio_group;
  if (req.session.user) {
    Usuario.update(
      { nome: nome, unidade: unidade },
      { where: { id: req.session.user.id } }
    ).then(() => {
      req.session.user.nome = nome;
      req.session.user.unidade = unidade;
      res.redirect("/profile");
    });
  }
});

module.exports = router;
