const pathModule = require('path');
const fileSystem = require('fs');

function getData(file) {
    try {
        const filePath = pathModule.join(__dirname, '..', 'models', file);
        const fileContent = fileSystem.readFileSync(filePath, 'utf-8');
        return JSON.parse(fileContent);
    } catch (error) {
        throw new Error(error);
    }
}

// Write data to file!

module.exports = {
    getData
}