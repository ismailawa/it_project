const { Student } = require("../models");

module.exports = {
  studentsListController: async (req, res) => {
    const students = await Student.findAll();
    res.render("students_list", { students: students });
  },

  createStudentController: (req, res) => {
    res.render("create_student");
  },
};
