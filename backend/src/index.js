const express = require("express");
const cors = require("cors");

const blogRoutes = require("./routes/blogs");

const app = express();
const port = 8000;

// Enabling CORS for any unknown origin
app.use(cors());

// Enabling the use of JSON for the body of the request
app.use(express.json());

app.use("/api/blogs", blogRoutes);

app.listen(port, () => {
  console.log(`Blog app backend listening on port ${port}`);
});
