const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
app.use(cors());
const categories = require("./Data/Course_category.json");
const courses = require("./Data/Course.json");
app.get("/", (req, res) => {
  res.send("Hello World! cors");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
app.get("/categories", (req, res) => {
  res.send(categories);
});
// category-course
app.get("/category-course/:id", (req, res) => {
  const id = req.params.id;
  const coursess = courses.filter((ch) => ch.category_id === id) || {};
  res.send(coursess);
});
app.get("/course/:id", (req, res) => {
  const id = req.params.id;
  const course = courses.filter((ch) => ch.category_id === id) || {};
  res.send(course);
});
app.get("/detalscourse/:id", (req, res) => {
  const id = req.params.id;
  const detals = courses.find((detal) => detal._id === id);
  res.send(detals);
});
app.get("/courses", (req, res) => {
  res.send(courses);
});
