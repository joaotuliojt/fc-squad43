const router = require("express").Router();
//Controllers
const indexController = require("../controllers/indexController");
const sedesController = require("../controllers/sedesController");
const historicController = require("../controllers/historicController");
const reserveController = require("../controllers/reserveController");
const initialController = require("../controllers/initialController");

//Rotas 
router.get("/", indexController.load);

router.get("/sedes", sedesController.load);

router.get("/historic", historicController.load);

router.get("/reserve", reserveController.load);

router.get("/initial", initialController.load);

module.exports = router;
