const getBlogs = async () => {
  try {
    const res = await fetch(
      "https://ix-blog-app-2d5c689132cd.herokuapp.com/api/blogs"
    );
    if (res.status !== 200) {
      throw Error(res.statusText);
    }
    const data = await res.json();
    return data;
  } catch (err) {
    throw Error(err);
  }
};

const getBlogsByCategoryId = async (categoryId) => {
  let categoryIdReq = categoryId ? categoryId : null;
  try {
    const res = await fetch(
      "https://ix-blog-app-2d5c689132cd.herokuapp.com/api/blogs/category/" +
        categoryIdReq
    );
    if (res.status !== 200) {
      throw Error(res.statusText);
    }
    const data = await res.json();
    return data;
  } catch (err) {
    throw Error(err);
  }
};

const blogsService = {
  getBlogs,
  getBlogsByCategoryId,
};

export default blogsService;
