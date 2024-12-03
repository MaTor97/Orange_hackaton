import express from 'express';
import bodyParser from 'body-parser';
import { insertData, fetchAllData } from './db_actions.js';

const app = express();

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the "public" folder
app.use(express.static('public'));

// Handle POST request to insert data
app.post('/submit', (req, res) => {
    const { userInput } = req.body;

    insertData(userInput, (err, results) => {
        if (err) {
            return res.status(500).send('Error inserting data into the database.');
        }
        res.send('Data inserted successfully!');
    });
});

// Optional: Handle GET request to fetch all data
app.get('/data', (req, res) => {
    fetchAllData((err, results) => {
        if (err) {
            return res.status(500).send('Error fetching data from the database.');
        }
        res.json(results);
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
