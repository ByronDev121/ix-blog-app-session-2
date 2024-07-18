const createBlog = (req, res) => {
  res.status(200).json({ message: "Created blog!", data: [] });
};

const getBlogs = (req, res) => {
  res.status(201).send({ message: "Return all blogs!", data: [] });
};

const getBlogById = (req, res) => {
  res.status(201).send({ message: "Return blog by Id!", data: [] });
};

const updateBlogById = (req, res) => {
  res.status(200).send({ message: "Updated blog!", data: [] });
};

const deleteBlogById = (req, res) => {
  res.status(200).send({ message: "Deleted blog!", data: [] });
};

module.exports = {
  createBlog,
  getBlogs,
  getBlogById,
  updateBlogById,
  deleteBlogById,
};
