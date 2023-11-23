import React, { useState, useEffect } from "react";
import axios from "axios";
import StudentForm from "./StudentForm";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// EditStudent Component
const EditStudent = (props) => {
  const { id } = useParams();
  const history = useNavigate();
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    ogrenci_no: "",
  });

  //onSubmit handler
  const onSubmit = (studentObject) => {
    axios
      .put("http://localhost:3000/students/edit-student/" + id, studentObject)
      .then((res) => {
        if (res.status === 200) {
          alert("Student successfully updated");
          console.log("Güncellendi");
          history("/");
        } else Promise.reject();
      })
      .catch((err) => alert("Something went wrong"));
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/students/edit-student/" + id)
      .then((res) => {
        const { name, email, ogrenci_no } = res.data;

        setFormValues({ name, email, ogrenci_no });
      })
      .catch((err) => console.log(err));
  }, [id]);

  // Return student form
  return (
    <StudentForm
      initialValues={formValues}
      onSubmit={onSubmit}
      enableReinitialize
    >
      Update Student
    </StudentForm>
  );
};

// Export EditStudent Component
export default EditStudent;
