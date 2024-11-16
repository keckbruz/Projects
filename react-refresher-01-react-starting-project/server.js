const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse incoming JSON data
app.use(express.json());  // This line tells Express to expect JSON in the request body

// API route to get the saved word
app.get('/api/word', (req, res) => {
    res.json({ word: savedWord });
});

// API route to save a new word
app.post('/api/word', (req, res) => {
    savedWord = req.body.word;  // req.body contains the parsed JSON object
    res.json({ message: 'Word saved successfully' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});