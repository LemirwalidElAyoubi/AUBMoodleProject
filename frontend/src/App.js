// src/App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StudentList from "./components/StudentList";
import StudentDetails from "./components/StudentDetails";
import NavBar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<StudentList />} />
          <Route path="/student/:id" element={<StudentDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

// import React, { useState } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import StudentList from "./components/StudentList";
// import StudentDetails from "./components/StudentDetails";

// const App = () => {
//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route path="/" element={<StudentList />} />
//           <Route path="/student/:id" element={<StudentDetails />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;
