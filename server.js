//ESM MODULES
import express from 'express';
import router from './routes/landing_page.js';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import sequelize from './database/database.js';
import helmet from 'helmet';
/*
    This is the web server of the application
*/
const app = express();
const port = 3000;

sequelize.authenticate().then(()=>{console.log("Connection reussie à SQLITE"); return sequelize.sync();});

// Accept all external requests
app.use(cors());

app.use(helmet());

// Middleware
// Parse JSON bodies
app.use(express.json());

// Routes
app.use('/api/v1', router);

// Swagger configuration
const swaggerOptions  = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Carambar API Node.js Express',
            version:'1.0.0',
            description: 'Documentation auto-générée avec Swageer'
        },
        servers: [
            {
                url: 'http://localhost:3000',
            },
        ],
    },
    apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

app.listen(port, () => {
    console.log(`Serveur lancé sur http://localhost:${port}`);
    console.log(`Swagger dispo sur http://localhost:${port}/api-docs`);
});