const express = require("express");
const authController = require("../controllers/auth.controller");

const router = express.Router();

router.get("/login", authController.loginController);

router.get("/register", authController.registerController);

router.post("/register", authController.createController);

router.post("/login", authController.verifyregisterController);

module.exports = router;
