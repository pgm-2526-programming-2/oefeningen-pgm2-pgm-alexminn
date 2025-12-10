const DEFAULT_VALUE = 0;

function sum(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

// Exporteren!
// module.exports = {
//     sum: sum,
//     multiply: multiply
// }
module.exports = {
    sum,
    multiply,
    DEFAULT_VALUE
}