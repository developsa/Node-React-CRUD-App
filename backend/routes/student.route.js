const express = require("express");
const studentRoute = express.Router();
const Student = require("../models/Student");

// List
studentRoute.route("/").get(async (req, res, next) => {
  try {
    const data = await Student.find();
    res.json(data);
  } catch (error) {
    next(error);
  }
});

//Create
studentRoute.route("/create-student").post(async (req, res) => {
  try {
    const newStudent = new Student(req.body);
    await newStudent.save();
    res.status(200).json({ "Student ": "Student added" });
  } catch (error) {
    res.status(400).send("Adding new student");
  }
});

//Delete
studentRoute.route("/delete-student/:id").delete(async (req, res) => {
  try {
    const deletedStudent = await Student.findByIdAndRemove({
      _id: req.params.id,
    });

    res.json(deletedStudent);
  } catch (error) {
    res.send(error);
  }
});

// Edit

///Get
studentRoute.route("/edit-student/:id").get(async (req, res, next) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.status(200).json(student);
  } catch (error) {
    next(error);
  }
});

// Put
studentRoute.route("/edit-student/:id").put(async (req, res, next) => {
  try {
    const updatedStudent = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedStudent) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.status(200).json(updatedStudent);
  } catch (error) {
    next(error);
  }
});

module.exports = studentRoute;
