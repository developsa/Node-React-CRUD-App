import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, Button } from "react-bootstrap";

const StudentForm = (props) => {
  //Validation kısmı(textlerin içi boşşa uyarsın bizi)
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string()
      .email("You have enter an invalid email address")
      .required("Required"),
    ogrenci_no: Yup.number()
      .positive("Invalid ogrenci_no number")
      .integer("Invalid ogrenci_no number")
      .required("Required"),
  });
  console.log(props);

  return (
    <div className="form-wrapper">
      <Formik {...props} validationSchema={validationSchema}>
        <Form>
          <FormGroup>
            <label>Name</label>
            <Field name="name" type="text" className="form-control" />
            <ErrorMessage
              name="name"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>
            <label>Email</label>
            <Field name="email" type="text" className="form-control" />
            <ErrorMessage
              name="email"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>
            <label>Student Number</label>
            <Field name="ogrenci_no" type="number" className="form-control" />
            <ErrorMessage
              name="ogrenci_no"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <Button className="button-form" variant="danger" size="lg" block="block" type="submit">
            {props.children}
          </Button>
        </Form>
      </Formik>
    </div>
  );
};
export default StudentForm;
