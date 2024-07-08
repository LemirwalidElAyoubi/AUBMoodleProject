const axios = require("axios");

const API_URL = "https://auob.dev.ethinksites.com/webservice/rest/server.php";
const API_KEY = "cc1e51af1642fd206679054a694ac24d";

// Function to fetch sample user data
const fetchSampleUsers = async () => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        wstoken: API_KEY,
        wsfunction: "core_user_get_users",
        moodlewsrestformat: "json",
        criteria: JSON.stringify([{ key: "username", value: "%" }]), // Fetch all users
      },
    });

    console.log("Full Response:", response.data);

    if (response.data && response.data.users) {
      console.log("Sample Users:", response.data.users);
    } else {
      console.log("No users found");
    }
  } catch (error) {
    console.error("Error fetching sample users:", error.message);
  }
};

// Call the function to fetch sample user data
fetchSampleUsers();

// const axios = require("axios");

// const API_URL = "https://auob.dev.ethinksites.com/webservice/rest/server.php";
// const API_KEY = "cc1e51af1642fd206679054a694ac24d";

// // Function to fetch sample user data
// const fetchSampleUsers = async () => {
//   try {
//     const response = await axios.get(API_URL, {
//       params: {
//         wstoken: API_KEY,
//         wsfunction: "core_user_get_users",
//         moodlewsrestformat: "json",
//         criteria: JSON.stringify([{ key: "email", value: "@" }]), // Search by email containing '@'
//       },
//     });

//     console.log("Full Response:", response.data);

//     if (response.data && response.data.users) {
//       console.log("Sample Users:", response.data.users);
//     } else {
//       console.log("No users found");
//     }
//   } catch (error) {
//     console.error("Error fetching sample users:", error.message);
//     console.error("Error Details:", error);
//   }
// };

// // Call the function to fetch sample user data
// fetchSampleUsers();
