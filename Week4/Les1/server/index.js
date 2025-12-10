const express = require('express');
const process = require("process");
const pathModule = require("path");
const filesystemModule = require("fs");
const myServer = express();

const PORT = 3000;
const HOST = 'localhost';

const recipesPath = pathModule.join(__dirname, 'recipes.json');
const fileContent = filesystemModule.readFileSync(recipesPath, "utf8");
const fileContentAsArray = JSON.parse(fileContent);

function getCurrentTime() {
    const now = new Date();
    return `${now.getUTCHours() + 1};${now.getUTCMinutes()}`;
}

myServer.get('/api', (request, response) => {
    const date = new Date();
    console.log((`Verzoek op de server ontvangen op ${date}`));
    response.status(200);
    //response.send('Antwoord van de server')
    response.json({
        name: "Api Test",
        requestTime: getCurrentTime()
    });
});

//Maak een /api/recipes endpoint! Geef hier alle recepten terug!

myServer.get('/api/recipes', (request, response) => {
    console.log((`Verzoek op de server ontvangen.`));
    response.status(200);
    //response.send('Antwoord van de server')
    response.json(fileContentAsArray);
    

});


myServer.listen(PORT, HOST, () => {
    console.log(`Server staat aan op https://${HOST}:${PORT}!`); //Afsluiten door Ctrl + C
    
});


console.log('server bestand');
