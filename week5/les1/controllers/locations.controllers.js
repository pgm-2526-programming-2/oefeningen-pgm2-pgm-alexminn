const pathModule = require("path");
const { getContentFromFile } = require("../utils/files.utils");
const fileSystem = require('fs/promises');
const filePath = pathModule.join(__dirname, '..', 'models', 'locations.json')
const crypto = require('crypto');
const { schema } = require("../validation/locations.validation");


function getLocations(req, res) {
    console.log('Get locations!');
    res.send("Data verstuurd naar gebruiker!");
}

async function addLocation(req, res) {
    //valideer de doorgestuurde locatie! - Helperfunctie
    const { error } = schema.validate(req.body);

    if (error) {
        res.status(422);
        return res.json({
            validation: error.details[0].message
        });
    }
    const locations = await getContentFromFile('locations.json');
    const updatedBody = {...req.body, id: crypto.randomUUID() };
    locations.push(updatedBody);
/*Helperfunctie - utils*/
    await fileSystem.writeFile(filePath, JSON.stringify(locations, null, 2), 'utf-8');
    console.log('Post a new location!', req.body, locations);

    res.status(201);
    res.send("Data toegevoegd van gebruiker!");
}

module.exports = {
    getLocations,
    addLocation,
}