const { Student } = require("../models");

module.exports = {
  loginController: (req, res) => {
    res.render("login_view");
  },

  registerController: (req, res) => {
    res.render("register_view");
  },

  createController: async (req, res) => {
    const { firstName, lastName, phone, email, password } = req.body;
    const student = await Student.create({
      firstName,
      lastName,
      phone,
      email,
      password,
    });
    // console.log(req.body);
    res.redirect("/auth/login");
  },

  verifyregisterController: (req, res) => {
    console.log("login");
    res.redirect("/");
  },
};
