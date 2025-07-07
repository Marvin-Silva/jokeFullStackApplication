# Backend appllication

Il s'agit d'un API responsable d'alimenter les données de l'interface client.

## Demarrer l'application
    Dans le fichier racine tapez: node server.js ; pour lancer l'app

    Tapez: node init-db.js ; pour charger les données


## Routes:

### Ajouter une blague

#### pour ajouter une blague, il suffit de se rendre sur la route :

##### Post: http://localhost:3000/api/v1/add/joke

Voici un aperçu:

![Postman](./assets/capture.jpg)

![Interface client](./assets/capture01.jpg) 

POV: ne pas oublier le corps de la requêtes

##### Swagger 
Pour visualiser la documentation swagger, il suffit d'accèder cette url: http://localhost:3000/api-docs/#/default après le lancement de l'application: