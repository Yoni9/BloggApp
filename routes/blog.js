const express = require("express");
const router = express.Router();
const Blog = require("../models/blog");
const middleWare = require("../middleware/getBlogByIdMiddleWare");
const blogController = require("../controller/blogController");

// Route to get all blogs
router.get("/", blogController.getBlogs);

// Route to add a blog
router.post("/blogs", blogController.createBlog);

// Route to get a specific blog
router.get("/blogs/:id", middleWare.getBlog, blogController.getBlogById);

// Route to update a specific blog
router.patch("/blogs/:id", middleWare.getBlog, blogController.updateBlog);

// Route to delete a specific blog
router.delete("/blogs/:id", middleWare.getBlog, blogController.deletBlog);

module.exports = router;
