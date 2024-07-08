// src/components/StudentList.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { searchStudents } from "../services/api";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  ListGroup,
  Spinner,
  Alert,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "../css/StudentList.css"; // Import the custom styles

const StudentList = () => {
  const [query, setQuery] = useState("");
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    try {
      const students = await searchStudents(query);
      setStudents(students);
    } catch (error) {
      setError("Failed to fetch students. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col md={6} className="mx-auto">
          <h1 className="mb-4 text-center">Student Search</h1>
          <Form className="d-flex mb-4">
            <Form.Control
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for students by email..."
            />
            <Button variant="primary" onClick={handleSearch} className="ms-2">
              <FontAwesomeIcon icon={faSearch} /> Search
            </Button>
          </Form>

          {loading && (
            <div className="text-center">
              <Spinner animation="border" variant="primary" />
            </div>
          )}

          {error && <Alert variant="danger">{error}</Alert>}

          {students.length > 0 && (
            <ListGroup>
              {students.map((student) => (
                <ListGroup.Item key={student.id}>
                  <Link to={`/student/${student.id}`}>
                    {student.firstname} {student.lastname}
                  </Link>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}

          {students.length === 0 && !loading && !error && (
            <Alert variant="info">
              No students found. Please try a different query.
            </Alert>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default StudentList;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { searchStudents } from "../services/api";

// const StudentList = () => {
//   const [query, setQuery] = useState("");
//   const [students, setStudents] = useState([]);

//   const handleSearch = async () => {
//     try {
//       const students = await searchStudents(query);
//       setStudents(students);
//     } catch (error) {
//       console.error("Error fetching students", error);
//     }
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         placeholder="Search students..."
//       />
//       <button onClick={handleSearch}>Search</button>
//       <ul>
//         {students.map((student) => (
//           <li key={student.id}>
//             <Link to={`/student/${student.id}`}>
//               {student.firstname} {student.lastname}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default StudentList;
// src/components/StudentList.js
