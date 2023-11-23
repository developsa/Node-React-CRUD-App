const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const studentRoute = require("./routes/student.route");
const teacherRoute = require("./routes/teacher.route");
const dbConfig = require("./database/db");

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server is running on PORT:", PORT);
});

//Database of Control
mongoose
  .connect(dbConfig.db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Database Connected Succesfly");
  })
  .catch((err) => {
    console.log("Database connection error: " + err);
  });

app.use(cors()); //allows all requests
app.use(bodyParser.json());
app.use("/students", studentRoute);
app.use("/teachers", teacherRoute);

app.use((req, res) => {
  res.status(404).send("Error 404");
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
