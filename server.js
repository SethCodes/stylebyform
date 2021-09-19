const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const port = process.env.PORT || 5000;
const app = express();

//access to .env variables
require("dotenv").config();
const MONGO_DB = process.env.ATLAS_URI;

//routes
const blogRoutes = require("./routes/Blogs");

//middleware
app.use(cors());
app.use(express.json());
app.use("/blogs", blogRoutes);

// static files for heroku
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//connect to db
mongoose
  .connect(MONGO_DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB has been connected"))
  .catch((err) => console.log(err));

//listen for port 5000 or prod
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
