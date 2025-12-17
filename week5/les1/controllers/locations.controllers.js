const pathModule = require("path");
const { getContentFromFile } = require("../utils/files.utils");
const fileSystem = require('fs/promises');
const filePath = pathModule.join(__dirname, '..', 'models', 'locations.json')


function getLocations(req, res) {
    console.log('Get locations!');
    res.send("Data verstuurd naar gebruiker!");
}

async function addLocation(req, res) {
    console.log('post');
    
    const locations = await getContentFromFile('locations.json');
    locations.push(req.body);
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