// src/components/StudentDetails.js

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getStudentDetails } from "../services/api";
import "../css/StudentDetails.css"; // Import the custom styles

const StudentDetails = () => {
  const { id } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const fetchStudentDetails = async () => {
      try {
        const student = await getStudentDetails(id);
        setStudent(student);
      } catch (error) {
        console.error("Error fetching student details", error);
      }
    };

    fetchStudentDetails();
  }, [id]);

  if (!student) {
    return <div>Loading...</div>;
  }

  return (
    <div className="student-details">
      <h1>
        {student.firstname} {student.lastname}
      </h1>
      <p>Email: {student.email}</p>
      <p>Status: {student.suspended ? "Disabled" : "Active"}</p>
      <h2>Enrolled Courses</h2>
      <ul>
        {student.enrolledcourses &&
          student.enrolledcourses.map((course) => (
            <li key={course.id}>
              {course.fullname} {course.hidden ? "(Hidden)" : ""}
            </li>
          ))}
      </ul>
      {/* Implement similar sections for previous courses, instructors, etc. */}
    </div>
  );
};

export default StudentDetails;

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { getStudentDetails } from "../services/api";

// const StudentDetails = () => {
//   const { id } = useParams();
//   const [student, setStudent] = useState(null);

//   useEffect(() => {
//     const fetchStudentDetails = async () => {
//       try {
//         const student = await getStudentDetails(id);
//         setStudent(student);
//       } catch (error) {
//         console.error("Error fetching student details", error);
//       }
//     };

//     fetchStudentDetails();
//   }, [id]);

//   if (!student) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>
//         {student.firstname} {student.lastname}
//       </h1>
//       <p>Email: {student.email}</p>
//       <p>Status: {student.suspended ? "Disabled" : "Active"}</p>
//       <h2>Enrolled Courses</h2>
//       <ul>
//         {student.enrolledcourses &&
//           student.enrolledcourses.map((course) => (
//             <li key={course.id}>
//               {course.fullname} {course.hidden ? "(Hidden)" : ""}
//             </li>
//           ))}
//       </ul>
//       {/* Implement similar sections for previous courses, instructors, etc. */}
//     </div>
//   );
// };

// export default StudentDetails;
