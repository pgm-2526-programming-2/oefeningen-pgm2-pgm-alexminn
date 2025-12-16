const express = require("express");
const quotesRouter = require('./routes/quotes.routes');

// Gebruiken CAPS voor instelbare constanten. Zal nooit gewijzigd worden in code.
const PORT = 8080;
const HOST = 'localhost';

const app = express();

// app.get("/api/quotes", (req, res) => {}))
// app.get("/api/quotes", (req, res) => getAllQuotes(req, res))
// Geen haakjes? Standaard parameters worden automatisch doorgegeven!
// app.get("/api/quotes", getAllQuotes)

// Middleware - Wordt uitgevoerd tussen het ontvangen van een verzoek en het verzenden van een antwoord om taken uit te voeren zoals logging, authenticatie of datavalidatie. Maar kan dus ook gebruikt worden om een Router aan mee te geven.
app.use('/api/', quotesRouter);
// Router is een collectie van routes dat we plaatsen in een ander bestand.



app.listen(PORT, HOST, (err) => {
    if (err) {
        return console.log(err.message);
    }

    console.log(`Server is opgestart en draaiende op http://${HOST}:${PORT}`);
})