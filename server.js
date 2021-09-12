const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const port = process.env.PORT || 5000;
require("dotenv").config();
const app = express();
const Blog = require("./models/Blog");


app.use(cors());
app.use(express.json());

const blogRoutes = require("./routes/Blogs");
app.use("/blogs", blogRoutes);

const uri = "mongodb+srv://KableAcademy:Kable@cluster4.9l4dq.mongodb.net/cinci-attractions?retryWrites=true&w=majority";
const MONGO_DB = process.env.ATLAS_URI;
console.log(MONGO_DB);


mongoose
  .connect(MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("MongoDB has been connected"))
  .catch((err) => console.log(err));

  // app.get('/', (req, res) => {
  //   Blog.find()
  //   .then((blog) => {
  //     const response = res.json(blog);
  //     console.log(response);
      

  //   })
  //   .catch(err => console.log(err));


  // })

// // Accessing the path module
// const path = require("path");

// // Step 1:
// app.use(express.static(path.resolve(__dirname, "./client/build")));
// // Step 2:
// app.get("*", function (request, response) {
//   response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
// });

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}