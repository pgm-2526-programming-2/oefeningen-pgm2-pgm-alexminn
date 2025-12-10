const person = {
    firstName: "Adriaan",
    lastName: "Glibert",
    age: 30
}

const myFirstName = person.firstName;
const myLastName = person.lastName;
const myAge = person.age;
// Belletje! Variabele naam zelfde als keynaam?

// const {firstName, lastName, age} = person;

// Verschil tussen array en object destructuring, object is op basis van een key! Niet de index! Dus de volgorde maakt niet uit (in tegenstelling tot array destructuring).
const { firstName, age, gender = 'Male' } = person;
console.log(age, gender); // 30, undefined (Male wanneer default waarde)


// Nadeel van object destructuring! Zelfde naam als key in object!
const options = {
    c: 20000,
    w: 3000,
    mod: "C8",
    b: undefined
}

const { w: weight, mod: model, c: cost, b: brand = 'Citroen' } = options; // Nieuwe variabele namen!

const { w: altWeight, ...rest } = options;

/* rest =
{
    c: 20000,
    mod: "C8",
    b: undefined
}
*/


const song = {
    name: "Flowers",
    artist: "Miley"
}

const edit = {
    name: "7 Things"
}

function editSong(s, { name }) {
    s.name = name;
}

editSong(song, edit);



// we pass object to function
let menuOptions = {
    title: "My menu",
    items: ["Item1", "Item2"]
};

// ...and it immediately expands it to variables
function showMenu({ title = "Untitled", width = 200, height = 100, items = [] }) {
    // title, items – taken from options,
    // width, height – defaults used
    console.log(`${title} ${width} ${height}`); // My Menu 200 100
    console.log(items); // Item1, Item2
}

showMenu(menuOptions);