module.exports = {
    studentsListController: (req, res) => {
        res.render("students_list");
      },
    createStudentController: (req, res) => {
        res.render("create_student");
    }
}