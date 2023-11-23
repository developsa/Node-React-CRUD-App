import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import StudentTableRow from "./StudentTableRow";
import "bootstrap/dist/css/bootstrap.min.css";
const ListStudent = () => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/students/")
      .then(({ data }) => {
        setStudents(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const DataTable = () => {
    return students.map((res, i) => {
      return <StudentTableRow obj={res} key={i} />;
    });
  };

  return (
    <div className="table-wrapper">
      <div style={{ textAlign: "center" }}>
        <h1>Student List</h1>
      </div>
      <Table striped bordered hover className="table-dark">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Student Number</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{DataTable()}</tbody>
      </Table>
    </div>
  );
};
export default ListStudent;
