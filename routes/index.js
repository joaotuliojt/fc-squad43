const router = require("express").Router();

const Unidade = require("../database/unidadeData");
const Reserva = require("../database/reservaData");
const Usuario = require("../database/userData");
const sequelize = require("sequelize");
const session = require("express-session");

router.use(
  session({
    secret: "senha123",
    resave: true,
    saveUninitialized: false,
  })
);

//MUlter Config

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

router.get("/historic/:month?", (req, res) => {
  let user = req.session.user;

  if (req.session.user) {
    let monthP = req.params.month;
    let month;
    if (isNaN(monthP)) {
      month = new Date().getMonth() + 1;
    } else {
      month = monthP;
    }

    Reserva.findAll({
      where: {
        id_usuario: user.id,
        data: sequelize.where(
          sequelize.fn("month", sequelize.col("data")),
          month
        ),
      },
      order: [["data", "DESC"]],
      raw: true,
    }).then((agendamentos) => {
      res.render("historic", { agendamentos, mes: month });
    });
  } else {
    res.redirect("/login");
  }
});

router.post("/historic", (req, res) => {
  let user = req.session.user;
  let month = req.body.months;
  res.redirect(`/historic/${month}`);
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
  data = `${data} 00:00:00`;
  let idUnidade = req.body.unidade;

  let user = req.session.user;

  Unidade.findOne({ where: { id: idUnidade }, raw: true }).then((n) => {
    let limiteUnidade = Math.round(n.capacidade * 0.4);

    Reserva.count({ where: { data: data, id_unidade: idUnidade } }).then(
      (n) => {
        let peoples = n;
        Reserva.count({
          where: { data: data, id_usuario: user.id },
        }).then(
          //data: data, id_usuario: user.id
          (n) => {
            let isAgend = n >= 1 ? true : false;

            if (peoples <= limiteUnidade && isAgend == false) {
              Reserva.create({
                data,
                id_usuario: user.id,
                id_unidade: idUnidade,
              }).then(() => {
                res.redirect("/reserve#openModal");
              });
            } else {
              res.redirect("/initial");
            }
          }
        );
      }
    );
  });
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
    let user = req.session.user;
    res.render("profileEdit", { user });
  } else {
    res.redirect("/login");
  }
});

router.post("/profile/edit", (req, res) => {
  console.log(req.file);
  let nome = req.body.nome;
  let unidade = req.body.radio_group;
  let user = req.session.user;
  if (user) {
    Usuario.update(
      { nome: nome, unidade_id: unidade },
      { where: { id: req.session.user.id } }
    ).then(() => {
      req.session.user.nome = nome;
      req.session.user.unidade_id = unidade;
      res.redirect("/profile");
    });
  }
});

module.exports = router;
