# Diff Details

Date : 2024-07-25 11:19:53

Directory /Users/byron/DevitTechnology/Projects/iX/blog-app/frontend/src

Total : 63 files,  2439 codes, 1 comments, 214 blanks, all 2654 lines

[Summary](results.md) / [Details](details.md) / [Diff Summary](diff.md) / Diff Details

## Files
| filename | language | code | comment | blank | total |
| :--- | :--- | ---: | ---: | ---: | ---: |
| [backend/src/controllers/authController.js](/backend/src/controllers/authController.js) | JavaScript | -112 | -8 | -8 | -128 |
| [backend/src/controllers/blogController.js](/backend/src/controllers/blogController.js) | JavaScript | -156 | 0 | -9 | -165 |
| [backend/src/controllers/categoryController.js](/backend/src/controllers/categoryController.js) | JavaScript | -64 | 0 | -6 | -70 |
| [backend/src/database/db.js](/backend/src/database/db.js) | JavaScript | -11 | 0 | -3 | -14 |
| [backend/src/index.js](/backend/src/index.js) | JavaScript | -18 | -2 | -8 | -28 |
| [backend/src/middleware/authMiddleware.js](/backend/src/middleware/authMiddleware.js) | JavaScript | -31 | 0 | -4 | -35 |
| [backend/src/models/Blog.js](/backend/src/models/Blog.js) | JavaScript | -60 | 0 | -4 | -64 |
| [backend/src/models/Category.js](/backend/src/models/Category.js) | JavaScript | -24 | 0 | -4 | -28 |
| [backend/src/models/User.js](/backend/src/models/User.js) | JavaScript | -34 | 0 | -3 | -37 |
| [backend/src/routes/auth.js](/backend/src/routes/auth.js) | JavaScript | -16 | 0 | -7 | -23 |
| [backend/src/routes/blogs.js](/backend/src/routes/blogs.js) | JavaScript | -26 | 0 | -10 | -36 |
| [backend/src/routes/categories.js](/backend/src/routes/categories.js) | JavaScript | -17 | 0 | -8 | -25 |
| [frontend/src/App.css](/frontend/src/App.css) | CSS | 0 | 0 | 1 | 1 |
| [frontend/src/App.jsx](/frontend/src/App.jsx) | JavaScript JSX | 53 | 0 | 9 | 62 |
| [frontend/src/App.test.js](/frontend/src/App.test.js) | JavaScript | 7 | 0 | 2 | 9 |
| [frontend/src/components/AddEditBlogModal/index.jsx](/frontend/src/components/AddEditBlogModal/index.jsx) | JavaScript JSX | 312 | 0 | 15 | 327 |
| [frontend/src/components/AddEditCategoryModal/index.jsx](/frontend/src/components/AddEditCategoryModal/index.jsx) | JavaScript JSX | 156 | 0 | 10 | 166 |
| [frontend/src/components/BlogGrid/index.css](/frontend/src/components/BlogGrid/index.css) | CSS | 52 | 0 | 12 | 64 |
| [frontend/src/components/BlogGrid/index.jsx](/frontend/src/components/BlogGrid/index.jsx) | JavaScript JSX | 40 | 0 | 7 | 47 |
| [frontend/src/components/BlogItem/index.css](/frontend/src/components/BlogItem/index.css) | CSS | 53 | 0 | 11 | 64 |
| [frontend/src/components/BlogItem/index.jsx](/frontend/src/components/BlogItem/index.jsx) | JavaScript JSX | 62 | 0 | 7 | 69 |
| [frontend/src/components/BlogItemText/index.css](/frontend/src/components/BlogItemText/index.css) | CSS | 12 | 0 | 2 | 14 |
| [frontend/src/components/BlogItemText/index.jsx](/frontend/src/components/BlogItemText/index.jsx) | JavaScript JSX | 34 | 0 | 5 | 39 |
| [frontend/src/components/BlogList/index.css](/frontend/src/components/BlogList/index.css) | CSS | 10 | 0 | 2 | 12 |
| [frontend/src/components/BlogList/index.jsx](/frontend/src/components/BlogList/index.jsx) | JavaScript JSX | 29 | 0 | 5 | 34 |
| [frontend/src/components/Categories/index.css](/frontend/src/components/Categories/index.css) | CSS | 9 | 0 | 1 | 10 |
| [frontend/src/components/Categories/index.jsx](/frontend/src/components/Categories/index.jsx) | JavaScript JSX | 37 | 0 | 5 | 42 |
| [frontend/src/components/CategoriesList/index.css](/frontend/src/components/CategoriesList/index.css) | CSS | 22 | 0 | 4 | 26 |
| [frontend/src/components/CategoriesList/index.jsx](/frontend/src/components/CategoriesList/index.jsx) | JavaScript JSX | 67 | 0 | 4 | 71 |
| [frontend/src/components/CategoriesScrollList/index.jsx](/frontend/src/components/CategoriesScrollList/index.jsx) | JavaScript JSX | 37 | 3 | 3 | 43 |
| [frontend/src/components/DeleteBlogModal/index.jsx](/frontend/src/components/DeleteBlogModal/index.jsx) | JavaScript JSX | 91 | 0 | 10 | 101 |
| [frontend/src/components/DeleteCategoryModal/index.jsx](/frontend/src/components/DeleteCategoryModal/index.jsx) | JavaScript JSX | 87 | 0 | 10 | 97 |
| [frontend/src/components/EditButtons/index.jsx](/frontend/src/components/EditButtons/index.jsx) | JavaScript JSX | 55 | 0 | 4 | 59 |
| [frontend/src/components/ErrorToast/index.jsx](/frontend/src/components/ErrorToast/index.jsx) | JavaScript JSX | 48 | 0 | 5 | 53 |
| [frontend/src/components/Footer/index.jsx](/frontend/src/components/Footer/index.jsx) | JavaScript JSX | 28 | 0 | 2 | 30 |
| [frontend/src/components/Heading/index.css](/frontend/src/components/Heading/index.css) | CSS | 8 | 0 | 1 | 9 |
| [frontend/src/components/Heading/index.jsx](/frontend/src/components/Heading/index.jsx) | JavaScript JSX | 5 | 0 | 3 | 8 |
| [frontend/src/components/Loader/index.jsx](/frontend/src/components/Loader/index.jsx) | JavaScript JSX | 10 | 0 | 2 | 12 |
| [frontend/src/components/Navbar/index.jsx](/frontend/src/components/Navbar/index.jsx) | JavaScript JSX | 86 | 0 | 6 | 92 |
| [frontend/src/components/Subheading/index.css](/frontend/src/components/Subheading/index.css) | CSS | 6 | 0 | 1 | 7 |
| [frontend/src/components/Subheading/index.jsx](/frontend/src/components/Subheading/index.jsx) | JavaScript JSX | 9 | 0 | 4 | 13 |
| [frontend/src/components/SuccessToast/index.jsx](/frontend/src/components/SuccessToast/index.jsx) | JavaScript JSX | 48 | 0 | 4 | 52 |
| [frontend/src/dummy-data.json](/frontend/src/dummy-data.json) | JSON | 298 | 0 | 0 | 298 |
| [frontend/src/index.css](/frontend/src/index.css) | CSS | 12 | 0 | 2 | 14 |
| [frontend/src/index.js](/frontend/src/index.js) | JavaScript | 13 | 3 | 3 | 19 |
| [frontend/src/logo.svg](/frontend/src/logo.svg) | XML | 1 | 0 | 0 | 1 |
| [frontend/src/pages/Blog/index.css](/frontend/src/pages/Blog/index.css) | CSS | 18 | 0 | 3 | 21 |
| [frontend/src/pages/Blog/index.jsx](/frontend/src/pages/Blog/index.jsx) | JavaScript JSX | 98 | 0 | 12 | 110 |
| [frontend/src/pages/Blogs/index.css](/frontend/src/pages/Blogs/index.css) | CSS | 13 | 0 | 2 | 15 |
| [frontend/src/pages/Blogs/index.jsx](/frontend/src/pages/Blogs/index.jsx) | JavaScript JSX | 182 | 1 | 17 | 200 |
| [frontend/src/pages/Categories/index.css](/frontend/src/pages/Categories/index.css) | CSS | 4 | 0 | 1 | 5 |
| [frontend/src/pages/Categories/index.jsx](/frontend/src/pages/Categories/index.jsx) | JavaScript JSX | 156 | 0 | 17 | 173 |
| [frontend/src/pages/Home/index.jsx](/frontend/src/pages/Home/index.jsx) | JavaScript JSX | 67 | 0 | 7 | 74 |
| [frontend/src/pages/Login/index.css](/frontend/src/pages/Login/index.css) | CSS | 14 | 0 | 2 | 16 |
| [frontend/src/pages/Login/index.jsx](/frontend/src/pages/Login/index.jsx) | JavaScript JSX | 101 | 0 | 13 | 114 |
| [frontend/src/pages/Profile/index.jsx](/frontend/src/pages/Profile/index.jsx) | JavaScript JSX | 82 | 0 | 12 | 94 |
| [frontend/src/pages/Register/index.css](/frontend/src/pages/Register/index.css) | CSS | 14 | 0 | 2 | 16 |
| [frontend/src/pages/Register/index.jsx](/frontend/src/pages/Register/index.jsx) | JavaScript JSX | 140 | 0 | 10 | 150 |
| [frontend/src/reportWebVitals.js](/frontend/src/reportWebVitals.js) | JavaScript | 12 | 0 | 2 | 14 |
| [frontend/src/services/authService.js](/frontend/src/services/authService.js) | JavaScript | 76 | 0 | 10 | 86 |
| [frontend/src/services/blogsService.js](/frontend/src/services/blogsService.js) | JavaScript | 141 | 0 | 9 | 150 |
| [frontend/src/services/categoryService.js](/frontend/src/services/categoryService.js) | JavaScript | 92 | 0 | 6 | 98 |
| [frontend/src/setupTests.js](/frontend/src/setupTests.js) | JavaScript | 1 | 4 | 1 | 6 |

[Summary](results.md) / [Details](details.md) / [Diff Summary](diff.md) / Diff Details