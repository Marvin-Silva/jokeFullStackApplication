import sequelize from './database/database.js';
import Joke from './models/joke.js';

async function initDatabase() {
    try {
        // Synchroniser la base de données
        await sequelize.sync({ force: true });
        console.log("Base de données synchronisée");

        // Ajouter quelques blagues de test
        const jokes = [
            { 
                question: 'Quelle est la femelle du hamster ?',
                response: 'L’Amsterdam' 
            },
            
            { 
                question: 'Que dit un oignon quand il se cogne ?',
                response: 'Aïe'
            },
            
            { 
                question: "Quel est l'animal le plus heureux ?", 
                response: 'Le hibou, parce que sa femme est chouette.'
             },
            
            { 
                question:  "Pourquoi le football c'est rigolo ?",
                response: 'Parce que Thierry en rit'
             },
            
            { 
                question: 'Quel est le sport le plus fruité ?',
                response: "La boxe, parce que tu te prends des pêches dans la poire et tu tombes dans les pommes."
             },
            
            { 
                question: 'Que se fait un Schtroumpf quand il tombe ?',
                response: 'Un Bleu'
             },
            
            { 
                question: 'Quel est le comble pour un marin ?',
                response: 'Avoir le nez qui coule'
             },
            
            { 
                question: "Qu'est ce que les enfants usent le plus à l'école ?",
                response:'Le professeur '
            },
            
            { 
                question:'Quel est le sport le plus silencieux ?',
                response:'Le para-chuuuut'
             },
            
            { 
                question: 'Quel est le comble pour un joueur de bowling ?',
                response: 'C’est de perdre la boule'
            }
        ];

        for (const joke of jokes) {
            await Joke.create(joke);
        }

        console.log("Blagues ajoutées avec succès !");
        process.exit(0);
    } catch (error) {
        console.error("Erreur lors de l'initialisation :", error);
        process.exit(1);
    }
}

initDatabase(); 