import axios from "axios";

const API_BASE_URL = "http://localhost:3001/api";

// Function to search for students
export const searchStudents = async (query) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/search`, {
      params: { query },
    });
    console.log("Data from searchStudents API:", response.data); // Log the response data
    return response.data;
  } catch (error) {
    console.error("Error in searchStudents:", error);
    throw error; // Re-throw the error to be caught by the calling function
  }
};

// Function to get student details
export const getStudentDetails = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/student/${id}`);
    console.log("Data from getStudentDetails API:", response.data); // Log the response data
    return response.data;
  } catch (error) {
    console.error("Error in getStudentDetails:", error);
    throw error; // Re-throw the error to be caught by the calling function
  }
};

// import axios from "axios";

// const API_BASE_URL = "http://localhost:3001/api";

// export const searchStudents = async (query) => {
//   const response = await axios.get(`${API_BASE_URL}/search`, {
//     params: { query },
//   });
//   return response.data;
// };

// export const getStudentDetails = async (id) => {
//   const response = await axios.get(`${API_BASE_URL}/student/${id}`);
//   return response.data;
// };
