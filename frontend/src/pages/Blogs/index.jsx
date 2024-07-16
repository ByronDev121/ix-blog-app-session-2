import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Heading from "../../components/Heading";
import BlogList from "../../components/BlogList";
import Footer from "../../components/Footer";
import CategoriesScrollList from "../../components/CategoriesScrollList";

import "./index.css";

const data = require("../../dummy-data.json");
const blogsData = data.blogPosts.reverse();
const categories = data.categories;

export default function BlogsPage() {
  const [categoryId, setCategoryId] = useState();
  const [blogs, setBlogs] = useState(blogsData);

  useEffect(() => {
    const filteredBlogs = blogsData.filter((blog) =>
      blog.categories.some((category) =>
        categoryId === undefined ? true : category.id === categoryId
      )
    );
    setBlogs(filteredBlogs);
  }, [categoryId]);

  const setBlog = (blogId) => {
    console.log("Function Prop executed");
    console.log(blogId);
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <Heading />
        <div className="scroll-menu">
          <CategoriesScrollList
            categories={categories}
            categoryId={categoryId}
            setCategoryId={setCategoryId}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p className="page-subtitle">Blog Posts</p>
        </div>
        <BlogList blogs={blogs} setBlog={setBlog} />
      </div>
      <Footer />
    </>
  );
}
