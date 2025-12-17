const fileSystem = require("fs/promises");
const pathModule = require('path');

async function getContentFromFile(fileName = 'locations.json') {
    const pathToFile = pathModule.join(__dirname, '..', 'models', fileName);
    const fileContentAsString = await fileSystem.readFile(pathToFile, 'utf-8');
    const fileContentAsValidJS = JSON.parse(fileContentAsString);
    return fileContentAsValidJS;
}



module.exports = {
    getContentFromFile
}