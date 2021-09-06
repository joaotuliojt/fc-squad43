const router = require("express").Router();
//Controllers
const indexController = require("../controllers/indexController");
const sedesController = require("../controllers/sedesController");
const historicController = require("../controllers/historicController");

router.get("/", indexController.load);

router.get("/sedes", sedesController.load);

router.get("/historic", historicController.load);

module.exports = router;
