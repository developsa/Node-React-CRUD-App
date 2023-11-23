import React, { useState, useEffect } from "react";
import axios from "axios";
import TeacherForm from "./TeacherForm";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// EditTeacher Component
const EditTeacher = (props) => {
  const { id } = useParams();
  const history = useNavigate();
  const [formValues, setFormValues] = useState({
    name: "",
    subject: "",
    phone_number: "",
  });

  //onSubmit handler
  const onSubmit = (teacherObject) => {
    axios
      .put("http://localhost:3000/teachers/edit-teacher/" + id, teacherObject)
      .then((res) => {
        if (res.status === 200) {
          alert("Teacher successfully updated");
          console.log("Güncellendi");
          history("/");
        } else Promise.reject();
      })
      .catch((err) => alert("Something went wrong"));
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/teachers/edit-teacher/" + id)
      .then((res) => {
        const { name, subject, phone_number } = res.data;

        setFormValues({ name, subject, phone_number });
      })
      .catch((err) => console.log(err));
  }, [id]);

  // Return Teacher form
  return (
    <TeacherForm
      initialValues={formValues}
      onSubmit={onSubmit}
      enableReinitialize
    >
      Update Teacher
    </TeacherForm>
  );
};

// Export EditTeacher Component
export default EditTeacher;
