module.exports = {
  loginController: (req, res) => {
    res.render("login_view");
  },

  registerController: (req, res) => {
    res.render("register_view");
  },

  createController: (req, res) => {
    const body = req.body;
    console.log(body);
    res.redirect("/auth/login");
  },

  verifyregisterController: (req, res) => {
    const body = req.body;
    console.log(body);
    res.redirect("/");
  },
};
