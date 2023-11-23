import React, { useState, useEffect } from "react";
import axios from "axios"; //Api isteklerini için kullanılır get,post,put,delete
import StudentForm from "./StudentForm";
import { useNavigate } from "react-router-dom";
const CreateStudent = () => {
  const [formValues, setValues] = useState({
    name: "",
    email: "",
    ogrenci_no: "",
  });
  const history = useNavigate();
  const onSubmit = (studentObject) => {
    axios
      .post("http://localhost:3000/students/create-student", studentObject)
      .then((res) => {
        if (res.status === 200) {
          alert("Student successfully created");
          history("/");
        } else {
          Promise.reject();
        }
      })
      .catch((err) => alert("Something went wrong"));
  };
  return (
    <StudentForm
      initialValues={formValues}
      onSubmit={onSubmit}
      enableReinitialize>
      Create Student
    </StudentForm>
  );
};
export default CreateStudent;
