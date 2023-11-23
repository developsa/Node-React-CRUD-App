const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let teacherSchema = new Schema(
  {
    name: {
      type: String,
    },
    subject: {
      type: String,
    },
    phone_number: {
      type: String,
    },
  },
  {
    collection: "teachers",
  }
);

module.exports = mongoose.model("Teacher", teacherSchema);
