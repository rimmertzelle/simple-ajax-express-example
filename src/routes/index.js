// TODO: implement HTTPS
const express = require("express");
const router = express.Router();
const indexController = require("../controllers/indexController");

//all routes
router.get("/", indexController.getIndex);
router.get("/names", indexController.getNames);

module.exports = router;
