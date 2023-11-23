import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, Button } from "react-bootstrap";

const TeacherForm = (props) => {
  //Validation kısmı(textlerin içi boşşa uyarsın bizi)
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    subject: Yup.string().required("Required"),
    phone_number: Yup.number()
      .positive("Invalid phone_number number")
      .integer("Invalid phone_number number")
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
            <label>Subject</label>
            <Field name="subject" type="text" className="form-control" />
            <ErrorMessage
              name="subject"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>
            <label>Phone Number</label>
            <Field name="phone_number" type="number" className="form-control" />
            <ErrorMessage
              name="phone_number"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <Button
            className="button-form"
            variant="danger"
            size="lg"
            block="block"
            type="submit"
          >
            {props.children}
          </Button>
        </Form>
      </Formik>
    </div>
  );
};
export default TeacherForm;
