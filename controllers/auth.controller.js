module.exports = {
  loginController: (req, res) => {
    res.render("login_view");
  },

  registerController: (req, res) => {
    res.render("register_view");
  },

  createController: (req, res) => {
    console.log("register");
    res.redirect("/auth/login");
  },

  verifyregisterController: (req, res) => {
    console.log("login");
    res.redirect("/");
  },
};
