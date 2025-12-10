// Operators
// > < ===, !==, etc.

// Spread en Rest operator
// Drie puntjes: ...

const numbers = [1, 2, 3];
console.log(numbers, ...numbers);

// Reden om te spreaden?
// 1. Kopie maken van een referentie datatype.
const students = ["Mert", "Yens"];
students.push("Farah");
const friends = students;

// const people = [students]; // [["Mert", "Yens", "Farah"]];
const people = [...students]; // Nieuwe array! Referentie kapot!
students.push("Milana");
// Student - ["Mert", "Yens", "Farah", "Milana"]
// Friends - ["Mert", "Yens", "Farah", "Milana"]
// People - ["Mert", "Yens", "Farah"]

// 2. Om arrays samen te voegen.
const drinks = ["Pintje", "Gin", "Mocktail"];
const snacks = ["Frikandel", "Chipjes"];

const menu = [...drinks, "Cola", ...snacks];

// 3. Wanneer een methode geen arrays aanvaardt
Math.max(3, 5, 7, 1, 2);
Math.max(...numbers);

// Dit werkt ook allemaal met objecten!
const car = {
    brand: "Citroen",
    model: "C8",
    year: 2011
}

const upgrade = {
    spoiler: true,
    extra: ["GPS", "Custom Uitlaat"]
}

// car.upgrade = upgrade;

/*
const car = {
    brand: "Citroen",
    model: "C8",
    year: 2011,
    upgrade: {
        spoiler: true,
        extra: ["GPS", "Custom Uitlaat"]
    }
}
*/

const upgradedCar = {
    ...car,
    ...upgrade,
}


/*
const upgradedCar = {
    brand: "Citroen",
    model: "C8",
    year: 2011,
    spoiler: true,
    extra: ["GPS", "Custom Uitlaat"]
}
*/


// Object keys advanced syntax
const a = 'Hello'

const obj = {
    a
}

// a: a (Eerste is de key, tweede is een variabele)
// a: "Hello"
// Korte schrijfwijze: a