import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const TeacherTableRow = (props) => {
  const { _id, name, subject, phone_number } = props.obj;

  const deleteTeacher = () => {
    axios
      .delete(`http://localhost:3000/teachers/delete-teacher/${_id}`)
      .then((res) => {
        if (res.status === 200) {
          alert("Teacher Successfully deleted");
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
      <td>{subject}</td>
      <td>{phone_number}</td>
      <td>
        <Link className="edit-link" to={"/edit-teacher/" + _id}>
          Edit
        </Link>
        <Button onClick={deleteTeacher} size="sm" variant="danger">
          Delete
        </Button>
      </td>
    </tr>
  );
};
export default TeacherTableRow;
