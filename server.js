//ESM MODULES
import express from 'express';
import router from './routes/landing_page.js';
import cors from 'cors';

/*
    This is the web server of the application
*/
const app = express();
const port = 3000;

app.use(cors());

// Middleware
// Parse JSON bodies
app.use(express.json());

// Routes
app.use('/api/v1', router);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});