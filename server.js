//ESM MODULES
import express from 'express';
//import db from './database.js';

const app = express();
const port = 3000;

// Middleware
// Parse JSON bodies
app.use(express.json());

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});