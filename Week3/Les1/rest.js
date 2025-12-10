// Selecteer "de rest"
function sum(a, b, ...rest) {
    console.log(rest);
    return a + b + rest.reduce((prev, curr) => prev + curr, 0);
}

// Rest operator verzamelt de overige argumenten en slaat deze op in een array.

// Rest operator is altijd op het einde en binnen haakjes.

console.log(sum(1, 2, 3));