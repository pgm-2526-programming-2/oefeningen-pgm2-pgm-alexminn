const games = ["Super Mario Bros", "Zelda", "N+ Game", "Pokemon"];
const favoriteGames = [{
    name: "Super Mario Bros",
    releaseYear: 1980
},{
    name: "Zelda",
    releaseYear: 1984
}

];

const altGames = new Array();
Array.isArray(games);

const secondGame = games[1];
const altSecondGame = games.at(1);
const lastGame = games.at(-1); //games[length - 1];

const  values = [
    "Adriaan",
    function () {
        console.log('Hello!');
    }
];

const amountOfFavGames = favoriteGames.length;

games.length = 3;
const topThree = games;

games.length = 4;
//console.log(games);

const stringArray = "[1, 2, 3, 4]";
const numbers = JSON.parse(stringArray);
console.log(typeof stringArray, typeof numbers);

//stringArray.push(5);
numbers.push(5);

const numbersString = JSON.stringify(numbers);
console.log(stringArray, numbers, numbersString)

const students = ["Nick", "Mert", "Yens"];
const people = ["Nick", "Mert", "Yens"];

const teacher = "Adriaan";
const friend = "Adriaan";

console.log(teacher == friend); //true
console.log(students == people); //false

function areArrayEqual(a, b) {
    const stringA = JSON.stringify(a);
    const stringB = JSON.stringify(b);

    console.log(stringA);
    console.log(stringB);
    if(stringA === stringB){
        return true;
    }
}

areArrayEqual(students, people);

const matrix = [
    ['0', '0', '0', '0'],
    ['0', 'x', '0', '0'],
    ['0', '0', '0', '0'],
    ['0', '0', '0', '0'],
]

matrix[1][1];

const colors = ["red", "green", "blue"];

/*for (let i = 0; i < colors.length; i <==>) {
    const currentColor = colors [i];
    console.log(currentColor);
}*/

for (const color of colors) {
    console.log(color);
}

colors.forEach(color => {
    console.log(color);
})

colors.forEach(function (color) {
    console.log(color);
})

colors.push("purple"); //Eind
colors.pop(); //Eind verwijderen
colors.unshift("Begin van array toevoegen"); //begin toevoegen
colors.shift(); //begin verwijderen

console.log('Numbers', numbers);
const doubleNumbers = numbers.map((value, index) => {
    if (value == 2){
        return value;
    }

    return value * index;
});

console.log(doubleNumbers);

console.log('Double Numbers as string', doubleNumbers.join(' '))

const numbersWithoutEight = doubleNumbers.filter((value) => {
    return value !== 8;
})

console.log(numbersWithoutEight)

/*numbers.some(() => {
    return number == 8;
})

numbers.some((number) => number === 8);

numbers.every(() => {
    return number == 8;
})*/

// Reduce -> Minder maken
// Van een array naar 1 getal te gaan (meestal een som/optelling)

const sales = [4, 10, 6];

sales.reduce((prevValue, currentValue) => {
    return prevValue + currentValue;
});

//Loop 1: 0 + 4 -> 4
//Loop 2: 4 + 10 -> 14
//Loop 3: 14 + 6 -> 20

const products = [
    {name: "Shirt", price: 20},
    {name: "Shoes", price: 20},
    {name: "Hat", price: 20},
];

/*products.price.reduce((prevValue, currentValue) => {
    return prevValue + currentValue;
})*/

const totalSales = products.reduce((prevValue, currentValue) => {
    if(typeof prevValue === "object"){
        return prevValue.price + currentValue.price;
    }   
    return prevValue + currentValue.price;
});

console.log(totalSales);











