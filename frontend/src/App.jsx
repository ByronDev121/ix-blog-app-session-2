import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./App.css";

import HomePage from "./pages/Home";
import BlogsPage from "./pages/Blogs";
import CategoriesPage from "./pages/Categories";

const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/categories",
    element: <CategoriesPage />,
  },
  {
    path: "/blogs/:categoryId?",
    element: <BlogsPage />,
  },
];

const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
