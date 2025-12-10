// Ophalen van waardes uit een array of object en die opslaan in een variabele
const person = ["Adriaan", "Glibert"];

const firstName = person[0];
const lastName = person[1];

// Destructuring
// Door aan de linkerzijde vierkante haakje gebruiken weten we dat we waardes uit een array gaan destructuren.
const [firstN, lastN] = ["Adriaan", "Glibert"];
const [firstNm = 'Jan', lastNm, middleNm = 'Ignace'] = person; // Standaardwaarde!

console.log(firstNm, middleNm); // Adriaan Ignace

const results = ["Ignace", "Arif", "Kobe", "Justin"];
const [firstWinner, , thirdWinner] = results; // Je kan elementen overslaan!

console.log(firstWinner, thirdWinner);

const songs = [
    {
        name: "Ophelia",
        artist: "Taylor Swift"
    },
    {
        name: "Still DRE",
        artist: "Snoop Dogg"
    }
];

// const [, firstTrack, lastTrack] = songs; // let op de komma!
const [, {name: artistName, artist}, lastTrack] = songs; // let op de komma!
console.log(lastTrack, artistName, artist); // undefined, Still DRE, Snoop Dogg

// Combinatie van de rest operator en destructuring
// Doel! Array opsplitsen in eerste element en de rest.
const [head, ...tail] = [1, 2, 3, 4, 5]; // Tail = [2, 3, 4, 5]

const letters = ["a", "b", "c"];

// Destructuring in een for of van een array.
for (const [index, value] of letters.entries()) {
    // const index = item[0];
    // const value = item[1];

    console.log(index, value);
}