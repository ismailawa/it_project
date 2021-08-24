const { Student } = require("../models");

module.exports = {
  studentsListController: async (req, res) => {
    const students = await Student.findAll();
    res.render("students_list", { students: students });
  },

  createStudentController: (req, res) => {
    res.render("create_student");
  },

  editStudentController: async (req, res) => {
    const id = req.params.id;
    const student = await Student.findAll({
      where: {
        id: id,
      },
    });

    console.log(student[0]);

    res.render("edit_student", { student: student[0] });
  },

  updateStudentController: async (req, res) => {
    const { id, firstName, lastName, phone, email, age, address } = req.body;

    const student = await Student.update(
      { firstName, lastName, phone, email, age, address },
      {
        where: {
          id: id,
        },
      }
    );

    res.redirect("/students");
  },
};
