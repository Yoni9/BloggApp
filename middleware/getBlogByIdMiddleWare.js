const Blog = require("../models/blog");

module.exports = {
  getBlog: async (req, res, next) =>{
    try {
      const blog = await Blog.findById(req.params.id);
      if (blog == null) {
        return res.status(404).json({ message: "Blog not found" });
      }
      res.blog = blog;
      next();
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },
};
