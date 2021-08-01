const express = require("express");

const indexController = require("../controllers/index.controller")

const router = express.Router();

router.get("/",indexController.homeController);

router.get("/about", indexController.aboutController)

module.exports = router;