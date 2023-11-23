const express = require("express");
const teacherRoute = express.Router();
const Teacher = require("../models/Teacher");

//Read
teacherRoute.route("/").get(async (req, res, next) => {
  try {
    const data = await Teacher.find();
    res.json(data);
  } catch (error) {
    next(error);
  }
});

//create
teacherRoute.route("/create-teacher").post(async (req, res) => {
  try {
    const newTeacher = new Teacher(req.body);
    await newTeacher.save();
    res.status(200).json({ "Teacher ": " Teacher added " });
  } catch (error) {
    res.status(404).send("Teacher doesnt create ");
  }
});

//delete
teacherRoute.route("/delete-teacher/:id").delete(async (req, res) => {
  try {
    const deletedTeacher = await Teacher.findByIdAndRemove({
      _id: req.params.id,
    });
    res.json(deletedTeacher);
  } catch (error) {
    res.send(error);
  }
});

//edit
//Get
teacherRoute.route("/edit-teacher/:id").get(async (req, res, next) => {
  try {
    const teacher = await Teacher.findById(req.params.id);
    if (!teacher) {
      return res.status(404).json({ message: "Teacher not found" });
    }
    res.status(200).json(teacher);
  } catch (error) {
    next(error);
  }
});

//put
teacherRoute.route("/edit-teacher/:id").put(async (req, res, next) => {
  try {
    const updatedTeacher = await Teacher.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedTeacher) {
      return res.status(404).json({ message: "Teacher not found" });
    }
    res.status(200).json(updatedTeacher);
  } catch (error) {
    next(error);
  }
});

module.exports=teacherRoute;