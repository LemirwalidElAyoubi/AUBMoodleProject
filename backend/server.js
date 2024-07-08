const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const API_URL = "https://auob.dev.ethinksites.com/webservice/rest/server.php";
const API_KEY = "cc1e51af1642fd206679054a694ac24d";

// Endpoint to search for students
app.get("/api/search", async (req, res) => {
  const { query } = req.query;
  try {
    const response = await axios.get(
      `${API_URL}?wstoken=${API_KEY}&wsfunction=core_user_get_users&criteria[0][key]=email&criteria[0][value]=${query}&moodlewsrestformat=json`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data from Moodle API" });
  }
});

// Endpoint to get student details
app.get("/api/student/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.get(
      `${API_URL}?wstoken=${API_KEY}&wsfunction=core_user_get_users_by_id&userids[0]=${id}&moodlewsrestformat=json`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data from Moodle API" });
  }
});

app.listen(port, () => {
  console.log(`Backend server running on http://localhost:${port}`);
});
