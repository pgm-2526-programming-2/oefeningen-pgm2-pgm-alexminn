//Overzichtelijkheid
function line(){
    console.log("--------------------------------------------------");  
};

//Oef 1
const auto = {
    merk: "Toyota",
    model: "Camry",
    jaar: 2022,
    kleur: "Blauw",
}
console.log(auto);
line();

auto.kleur = "Zwart";
console.log(auto);
line();

console.log(auto.merk);
line();

auto.brandstof = "Benzine";
console.log(auto);
line();

delete auto.jaar;
console.log(auto);
line();

//Oef 2
const persoon = {
    naam: "Anna",
    leeftijd: 25,
    adres:{
        straat: "Hoofdstraat",
        nummer: 123,
        stad: "Stadsville",
    },
}
console.log(persoon);
line();

console.log(persoon.adres.straat);
line();

persoon.telefoon = "04464841548";
console.log(persoon);
line();

const extraInfo = {
    hobbies: ["Voetbal", "Gamen", "Schrijven"],
    favorieteKleur: "Rood",
};
persoon.extraInfo = extraInfo;
console.log(persoon);
line();

//Oef 3
function zijnObjectenIdentiek(obj1, obj2) {
    return JSON.stringify(obj1) == JSON.stringify(obj2);
}

const objectA = { a: 1, b: 2, c: 3 };
const objectB = { a: 1, b: 2, c: 3 };

console.log(zijnObjectenIdentiek(objectA, objectB)); // true
line();

//Oef 4
const shoppingCart = {
    items: [
        { name: "Product 1", price: 20 },
        { name: "Product 2", price: 30 },
        { name: "Product 3", price: 15 },
    ],

    calculateTotal: function() {
    return this.items.reduce((total, item) => total + item.price, 0);
    },
};

/*
const itemNames = Object.keys(shoppingCart);
console.log("Namen van items:", itemNames);
line();

const itemPrices = Object.values(shoppingCart);
console.log("Prijzen van items:", itemPrices);
line();

const itemEntries = Object.entries(shoppingCart);
console.log("Namen en prijzen van items:", itemEntries);
line();
*/

console.log(shoppingCart.calculateTotal());



