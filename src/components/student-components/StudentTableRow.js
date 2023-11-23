import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const StudentTableRow = (props) => {
  const { _id, name, email, ogrenci_no } = props.obj;

  const deleteStudent = () => {
    axios
      .delete(`http://localhost:3000/students/delete-student/${_id}`)
      .then((res) => {
        if (res.status === 200) {
          alert("Student Successfully deleted");
          window.location.reload();
        } else {
          Promise.reject();
        }
      })
      .catch((err) => alert("Something went wrong"));
  };
  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{ogrenci_no}</td>
      <td>
        <Link className="edit-link" to={"/edit-student/" + _id}>
          Edit
        </Link>
        <Button onClick={deleteStudent} size="sm" variant="danger">
          Delete
        </Button>
      </td>
    </tr>
  );
};
export default StudentTableRow;
