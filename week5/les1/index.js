const express = require("express");
const locationsRouter = require("./routes/locations.routes");
const app = express();

const PORT = 3030;
const HOST = 'localhost';

app.use(express.json());
app.use(locationsRouter)

app.listen(PORT, HOST, (err) => {
    if (err) {
        return console.log(err.message);
    }

    console.log(`Server is opgestart en draaiende op http://${HOST}:${PORT}`);
})