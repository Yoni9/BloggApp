const Blog = require("../models/blog");

module.exports = {
  getBlogs: async (req, res)=> {
    try {
      const blogs = await Blog.find();
      res.json(blogs);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  getBlogById: async (req, res)=> {
    res.json(res.blog);
  },

  createBlog: async (req, res) => {
    const blog = new Blog({
        title: req.body.title,
        content: req.body.content
      });
    
      try {
        const newBlog = await blog.save();
        res.status(201).json(newBlog);
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
  },


  updateBlog: async (req, res)=> {
    if (req.body.title != null) {
        res.blog.title = req.body.title;
      }
      if (req.body.content != null) {
        res.blog.content = req.body.content;
      }
    
      try {
        const updatedBlog = await res.blog.save();
        res.json(updatedBlog);
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
  },

  deletBlog: async (req, res)=> {
    try {
        await res.blog.remove();
        res.json({ message: 'Blog has been deleted' });
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
  },

};
