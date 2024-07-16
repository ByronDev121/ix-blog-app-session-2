import React from "react";
import Navbar from "../../components/Navbar";
import Heading from "../../components/Heading";
import Subheading from "../../components/Subheading";
import CategoriesList from "../../components/CategoriesList";
import Footer from "../../components/Footer";

const data = require("../../dummy-data.json");
const categories = data.categories;

export default function CategoriesPage() {
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
