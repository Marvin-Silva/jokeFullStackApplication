import express from 'express';
import database from '../database.js';

/*
    This is the routes endpoints to landing page 
*/

const router = express.Router();


/**
 * @swagger
 * /blagues:
 *   get:
 *     summary: Récupere plusieurs blagues
 *     description: Renvoie une liste des blagues
 *     responses:
 *       200:
 *         description: Liste des blagues récupérée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   question:
 *                     type: string
 *                   reponse:
 *                     type: string 
 *       404:
 *         description: Liste non recupéré
 */
router.get('/blagues', (req, res) => {
    database.all('SELECT * FROM jokes', [], (err, joke_list)=>{
        if(err){
           return res.status(500).json({error: "Web server error"});
        }else{
            return res.json(joke_list)
        }
    })
});


/**
 * @swagger
 * /blagues/random:
 *   get:
 *     summary: Récupere une blague
 *     description: Renvoie une blague aléatoire
 *     responses:
 *       200:
 *         description: Blague récupérée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 question:
 *                   type: string
 *                 response:
 *                   type: string
 *       404:
 *         description: Blague non generée
 */
router.get('/blagues/random', (req, res)=>{

    database.all('SELECT * FROM jokes', [], (err, joke_list) => {
        if(err){
           return res.status(400).json({err: "Blague pas trouvée"})
        }else{
            const random = Math.floor(Math.random() * joke_list.length);
            
            const random_joke = joke_list[random];

            return res.json(random_joke);
        }
    });
});


/**
 * @swagger
 * /blagues/:id:
 *   get:
 *     summary: Récupere une blague
 *     description: Renvoie une blague par son identifiant
 *     parameters: 
 *      - in: path
 *        name: id
 *        required: true
 *        schema: 
 *          type: integer 
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 question:
 *                   type: string
 *                 response:
 *                   type: string
 *       404:
 *         description: Blague non trouvée
 */
router.get('/blagues/:id', (req, res) => {
    const id = req.params.id;

    database.get('SELECT * FROM jokes WHERE jokes.id = ?',[id], (err, joke)=>{
        if(err){
            return res.status(500).json({err: "Cette blague n'existe pas !!!!"})
        }else{
           return res.json(joke);
        }
    });
});

/**
 * @swagger
 * /add/joke:
 *   post:
 *     summary: Ajoute une blague
 *     description: Fonction sans retour
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               question:
 *                 type: string
 *               response:
 *                 type: string
 *       schema:
 *          type: string
 *     responses:
 *       200:
 *         description: Blague ajoutée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       404:
 *         description: Blague non ajoutée
 */
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