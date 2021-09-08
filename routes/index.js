const router = require("express").Router();
//Controllers

//Rotas
router.get("/", (req, res) => {
  res.render("index");
});

router.get("/login", (req, res) => {
  res.render("login");
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
  res.render("initial");
});

router.get("/profile", (req, res) => {
  res.render("profile");
});

router.get("/profile/edit", (req, res) => {
  res.render("profileEdit");
});

module.exports = router;
