const express = require('express');
const myServer = express();

const PORT = 3000;
const HOST = 'localhost';

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


myServer.listen(PORT, HOST, () => {
    console.log(`Server staat aan op https://${HOST}:${PORT}!`); //Afsluiten door Ctrl + C
    
});


console.log('server bestand');
