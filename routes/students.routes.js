const express = require("express");
const studentsController = require("../controllers/students.controller");

const router = express.Router();

router.get("/", studentsController.studentsListController);

router.get("/create", studentsController.createStudentController);

router.get("/edit/:id", studentsController.editStudentController);

router.post("/update", studentsController.updateStudentController);

module.exports = router;
