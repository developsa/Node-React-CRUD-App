import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import TeacherTableRow from "./TeacherTableRow";
import "bootstrap/dist/css/bootstrap.min.css";
const ListTeacher = () => {
  const [teachers, setTeachers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/teachers/")
      .then(({ data }) => {
        setTeachers(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const DataTable = () => {
    return teachers.map((res, i) => {
      return <TeacherTableRow obj={res} key={i} />;
    });
  };

  return (
    <div className="table-wrapper">
      <div style={{ textAlign: "center" }}>
        <h1>Teacher List</h1>
      </div>
      <Table striped bordered hover className="table-dark">
        <thead>
          <tr>
            <th>Name</th>
            <th>Subject</th>
            <th>Phone Number</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{DataTable()}</tbody>
      </Table>
    </div>
  );
};
export default ListTeacher;
