const process = require("process");
const pathModule = require("path");
const filesystemModule = require("fs");
// require altijd bovenaan jouw bestand!

// const studentsPath = "./students.json";
const studentsPath = pathModule.join(__dirname, 'students.json');

// Filesystem kan om bestanden te lezen!
const fileContent = filesystemModule.readFileSync(studentsPath, "utf8");
const fileContentAsArray = JSON.parse(fileContent);
fileContentAsArray.push({
    name: "Yens",
    age: 25
});
console.log(fileContentAsArray);

filesystemModule.writeFileSync(studentsPath, JSON.stringify(fileContentAsArray));

// Dit werkt op mijn lokaal toestel.
// Zo gebruikt Linux \ in plaats van /
// const pathToFunctionsCourse = "../../week_1/les_1/functions.js";
const pathToFunctionsCourse = pathModule.join('..', '..', 'week_1', 'les_1', 'functions.js');

// Nut van path?
// Platformonafhankelijk (/ vs \)
// Veiliger/Robuster - Speciale tekens zoals spatie kunnen.
// Toekomst! Nieuwe OS?

console.log(__dirname);