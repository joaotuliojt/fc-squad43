const router = require("express").Router();
//Controllers
const indexController = require("../controllers/indexController");
const sedesController = require("../controllers/sedesController");

router.get("/", indexController.load);

router.get("/sedes", sedesController.load);

module.exports = router;
