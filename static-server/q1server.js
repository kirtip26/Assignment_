const express = require('express');
const path = require('path');

const app = express();
const port = 8080; // Change this port if required

// Set the public directory to serve static resources
const publicDirectoryPath = path.join(__dirname, 'public');
app.use(express.static(publicDirectoryPath));

// Define a route to handle other requests (optional)
app.get('*', (req, res) => {
  res.status(404).send('Hello');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
