const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const facultyRoutes = require("./routes/facultyRoutes");
const universityRoutes = require("./routes/universityRoutes");

const app = express();

mongoose.connect("mongodb://localhost:27017/universityDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/faculties", facultyRoutes);
app.use("/universities", universityRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
