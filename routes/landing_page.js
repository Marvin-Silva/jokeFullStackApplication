import express from 'express';

/*
    This is the routes endpoints to landing page 
*/
const router = express.Router();

// Dashbord
router.get('/', (req, res) => {
    res.send('Bienvenue au landing page');
});

// Jokes 
router.get('/blagues', (req, res) => {
    res.send('Ceci est une liste de blagues');
});

// Retriever Joke identifier
router.get('/blagues/:id', (req, res) => {
    res.send('Ceci est une blagué ciblé');
});

// Random joke
router.get('/blagues/random', (req, res)=>{
    res.send('Ceci est une blague aléatoire ')
});

// Add identifier
router.post('/add/joke', (req, res) => {
    res.send('Ceci est une nouvelle blague');
});

export default router;