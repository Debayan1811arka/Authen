require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

// Import DB connection and routes
require("./db/conn");
const router = require("./Routes/router");

// Load port from .env if available
const port = process.env.PORT || 6002;

// CORS Configuration
app.use(cors({
  origin: 'https://authenport.netlify.app', // ✅ Use Netlify frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

// Middleware
app.use(express.json()); // To parse JSON bodies
app.use(router);         // Your route handler

// Start Server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
