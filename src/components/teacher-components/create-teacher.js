import React, { useState, useEffect } from "react";
import axios from "axios"; //Api isteklerini için kullanılır get,post,put,delete
import TeacherForm from "./TeacherForm";
import { useNavigate } from "react-router-dom";
const CreateTeacher = () => {
  const [formValues, setValues] = useState({
    name: "",
    subject: "",
    phone_number: "",
  });
  const history = useNavigate();
  const onSubmit = (teacherObject) => {
    axios
      .post("http://localhost:3000/teachers/create-teacher", teacherObject)
      .then((res) => {
        if (res.status === 200) {
          alert("Teacher successfully created");
          history("/");
        } else {
          Promise.reject();
        }
      })
      .catch((err) => alert("Something went wrong"));
  };
  return (
    <TeacherForm
      initialValues={formValues}
      onSubmit={onSubmit}
      enableReinitialize
    >
      Create Teacher
    </TeacherForm>
  );
};
export default CreateTeacher;
