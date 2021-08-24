module.exports = {
  createPost: (req, res) => {},
  getPostCreateView: (req, res) => {
    res.render("create");
  },
  getPostList: (req, res) => {
    res.render("post_list_views");
  },
};
