import React, { useState, useEffect } from "react";

import Navbar from "../../components/Navbar";
import Heading from "../../components/Heading";
import Subheading from "../../components/Subheading";
import CategoriesList from "../../components/CategoriesList";
import Footer from "../../components/Footer";
import Loader from "../../components/Loader";

import categoryService from "../../services/categoryService";

export default function CategoriesPage() {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState();

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        setLoading(true);
        const categories = await categoryService.getCategories();
        setCategories(categories.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    fetchPageData();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <Heading />
        <Subheading subHeading={"Categories"} />
        <CategoriesList categories={categories} />
        <Footer />
      </div>
    </>
  );
}
