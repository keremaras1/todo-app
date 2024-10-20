// server.js
// Main server file for the To-Do app. Sets up the Express server, middleware, and routes.

const express = require('express');
const cors = require('cors'); // Middleware for handling Cross-Origin Resource Sharing (CORS)
const app = express();

const todoRoutes = require('./routes/todoRoutes'); // Import the API routes
const PORT = process.env.PORT || 5001; // Specify port number or use default port 5000

// Use CORS middleware to allow cross-origin requests from the frontend
app.use(cors()); // This allows requests from different origins. In our case, from different port of the frontend.

// Middleware to parse incoming JSON requests
app.use(express.json()); // Enables parsing of JSON bodies in incoming requests

// Use the routes defined in the todoRoutes file for handling /api/todos endpoints
// The API routes could normally be implemented within the main server.
// However, separating API routes to different scripts is a better practice, to improve readability in case new API behaviour is to be added
app.use('/api', todoRoutes) // Mount the todoRoutes under /api/todos

// Start the server on specified port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
