module.exports = {
  homeController: (req, res) => {
    res.render("index");
  },

  aboutController: (req, res) => {
    res.render("about");
  },
};
