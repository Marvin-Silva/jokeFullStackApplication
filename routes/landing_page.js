import express from 'express';
import database from '../database.js';

/*
    This is the routes endpoints to landing page 
*/
const router = express.Router();

// Dashbord
router.get('', (req, res) => {
   res.send("Bienvenue au Landing page")
});

// Get all Jokes 
router.get('/blagues', (req, res) => {
    database.all('SELECT * FROM jokes', [], (err, row)=>{
        if(err){
           return res.status(500).json({error: "Web server error"});
        }else{
            res.render('jokes',{joke: row})
        }
    })
});

// Get Random joke
router.get('/blagues/random', (req, res)=>{

    database.all('SELECT * FROM jokes', [], (err, joke_list) => {
        if(err){
           return res.status(400).json({err: "Blague pas trouvée"})
        }else{
            const random = Math.floor(Math.random() * joke_list.length);
            
            const random_joke = joke_list[1];

            res.render('random_joke', {jokes: random_joke});
        }
    });
});

// Retriever Joke identifier
router.get('/blagues/:id', (req, res) => {
    const id = req.params.id;

    database.get('SELECT * FROM jokes WHERE jokes.id = ?',[id], (err, row)=>{
        if(err){
            return res.status(500).json({err: "Cette blague n'existe pas !!!!"})
        }else{
            res.render('joke_id', {jokes: row})
        }
    });
});

// Add new Joke
router.post('/add/joke', (req, res) => {
    const question = req.body.question;
    const response = req.body.response;

    if(!question || !response)
        return res.status(400).json({res: "Question et Reponse sont requise"})

    const insert = database.prepare('INSERT INTO jokes(question, response) VALUES (?, ?)');

    insert.run([question, response], (err, new_joke)=>{
        if(err){
          return res.status(500).json({err: "La blague n'a pas été ajoutée"});
        }
        return res.json({message: "Blague ajoutée avec succès"});
    })
    insert.finalize();
});

export default router;