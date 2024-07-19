import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./index.css";

import Navbar from "../../components/Navbar";
import Heading from "../../components/Heading";
import BlogList from "../../components/BlogList";
import Footer from "../../components/Footer";
import CategoriesScrollList from "../../components/CategoriesScrollList";
import Loader from "../../components/Loader";
import SuccessToast from "../../components/SuccessToast";
import ErrorToast from "../../components/ErrorToast";
import AddEditBlogModal from "../../components/AddEditBlogModal";

import blogsService from "../../services/blogsService";
import categoriesService from "../../services/categoryService";

export default function BlogsPage() {
  const { categoryId } = useParams();

  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState("");

  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);

  const [addBlog, setAddBlog] = useState();
  const [editBlog, setEditBlog] = useState();
  const [deleteBlog, setDeleteBlog] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const blogRes = await blogsService.getBlogsByCategoryId(categoryId);
        const categoryRes = await categoriesService.getCategories();
        setBlogs(blogRes.data);
        setCategories(categoryRes.data);
        setLoading(false);
      } catch (error) {
        setIsError(true);
        setMessage(error.message);
        setLoading(false);
      }
    }
    fetchData();
  }, [categoryId]);

  const onBlogEdit = (blog) => {
    setEditBlog(blog);
  };
  const onBlogDelete = (blog) => {
    setDeleteBlog(blog);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <Heading />
        <div className="scroll-menu">
          <CategoriesScrollList
            categories={categories}
            categoryId={categoryId}
            // setCategoryId={setDisplayCategoryId}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p className="page-subtitle">Blog Posts</p>
        </div>
        <BlogList
          blogs={blogs}
          onBlogEdit={onBlogEdit}
          onBlogDelete={onBlogDelete}
        />
      </div>
      <Footer />
      <SuccessToast
        show={isSuccess}
        message={message}
        onClose={() => {
          setIsSuccess(false);
        }}
      />
      <ErrorToast
        show={isError}
        message={message}
        onClose={() => {
          setIsError(false);
        }}
      />
      <AddEditBlogModal
        addBlog={addBlog}
        editBlog={editBlog}
        categories={categories}
        createBlog={() => {}}
        updateBlog={() => {}}
        onClose={() => {}}
      />
    </>
  );
}
