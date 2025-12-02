//Overzichtelijkheid
function line(){
    console.log("--------------------------------------------------");  
};


//oef 1
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
for (const day of days) {
    console.log(day);
}

line();

//oef 2
    let fruits = ['Apples', 'Pear', 'Orange'];
    let shoppingCart = fruits;
    shoppingCart.push('Banana');
    console.log(fruits.length); //log ipv alert aangezien dit niet gelinkt is aan HTML.

line();

//oef 3
    const matrix = [
    ['0', '1', '6'],
    ['2', '7', '9'],
    ];

line();

//oef 4
const numbers = [1, 2, 3, 4, 5];
for (const number of numbers) {
    console.log(number);
}

line();

const letters = "Hello";
for (const letter of letters) {
    console.log(letter);
    
}

line();

const colors = ['red', 'blue', 'green', 'yellow'];
colors.forEach((color, index) => {
    console.log(color, index);
    
});

line();

//oef 5
const woorden = [
    'mal',
    'snurkduif',
    'bromvlieg',
    'snottebel',
    'knotsgek',
    'pindakaas',
    'fluitketel',
    'smurfenmuts',
];

const join = woorden.join("-");
console.log(join);

line();

const startingWithB = woorden.some((word) => word.startsWith("B"));
console.log(startingWithB);

line();

woorden.unshift("Hello");
console.log(woorden);

line();

const minimumTwoLetters = woorden.every((word) => word.length > 2);
console.log(minimumTwoLetters);

line();

woorden.sort();
console.log(woorden);

line();

console.log(woorden[2]);

line();

const filterWordsLongerThanFourCharacters = woorden.filter((word) => word.length < 4);
console.log(filterWordsLongerThanFourCharacters);

line();

//oef 6
const willekeurigeGetallen = Array.from(
    { length: 10 },
  () => Math.floor(Math.random() * 100) + 1
);
console.log(willekeurigeGetallen);

line();

const filterNumbersHigherThanTen = willekeurigeGetallen.filter((num) => num < 10);
console.log(filterNumbersHigherThanTen);

line();

willekeurigeGetallen.pop();
console.log(willekeurigeGetallen);

line();

willekeurigeGetallen.shift();
console.log(willekeurigeGetallen);

line();

willekeurigeGetallen.push(5);
console.log(willekeurigeGetallen);

line();

const maximumtwenty = willekeurigeGetallen.every((num) => num < 20);
console.log(maximumtwenty);

line();

//const numJoin = willekeurigeGetallen.join(" ");
console.log(willekeurigeGetallen.join(" "));

line();

const sum = willekeurigeGetallen.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sum);

line();

const double = willekeurigeGetallen.map((num) => num * 2);
console.log(double);

line();

const oneNumberBiggerThanThirty = willekeurigeGetallen.some((num) => num > 30);
console.log(oneNumberBiggerThanThirty);

line();

//oef 7
const willekeurigeNamenArray = [
    ['Alice', 'Bob', 'Charlie'],
    ['David', 'Eva', 'Frank'],
    ['Grace', 'Hank', 'Ivy'],
    ['Jack', 'Kelly', 'Liam']
];
console.log(willekeurigeNamenArray);

line();

const flatArray = willekeurigeNamenArray.flat();
console.log(flatArray);

line();


//Verdubbel elk getal en maak een nieuwe array door alle subarrays te flatten. -> geen getallen

willekeurigeNamenArray.forEach((array) => array.shift());
console.log(willekeurigeNamenArray);

line();

willekeurigeNamenArray.pop();
console.log(willekeurigeNamenArray);

line();

//oef 8
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

function sumArray(nOne, nTwo ) {
    return nOne.map((value, index) => {
        return value + nTwo[index];
    });
}

const result = sumArray(array1, array2);
console.log(result);

line();

//oef 9
let woordenArray = ['appel', 'peer', 'kiwi', 'banaan'];
let langsteWoord = woordenArray.reduce((previousValue, currentValue) => {
    return previousValue.length > currentValue.length ? previousValue : currentValue;
});
console.log(langsteWoord);

line();

//oef 10
function filterEvenGetallen(getallen) {
    return getallen.filter((getal) => getal % 2 == 0);
}

let willekeurigeGetallenTwo = [3, 8, 15, 6, 10, 7];
let evenGetallen = filterEvenGetallen(willekeurigeGetallenTwo);
console.log(evenGetallen); // geeft [8, 6, 10]

line();
