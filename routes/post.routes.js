const express = require("express");
const router = express.Router();
const controller = require("../controllers/post.controller");

router.get("/", controller.getPostCreateView);
router.get("/list", controller.getPostList);
router.post("/create", controller.createPost);

module.exports = router;
