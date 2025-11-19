//Theorie
const name = 'Adriaan';
const age = 21;

console.log(sum(age, 12));
console.log(20);

function showMessage() {
    console.log('Answer Checker Message');
}

function checkAnswer(answer, solution, callback) {
    if (answer == solution) {
        callback();
        return true;
    }

    callback();
    return false;
}

checkAnswer('ja', 'ja', showMessage);


//Oefeningen
//Oefening 1. random student
function selectRandomStudent(arr) {
    return arr[Math.floor(Math.random()*students.length)];
    
}

const students = ['Yme', 'Arne', 'Mert'];
console.log(selectRandomStudent(students));

// Oefening 2. Maak een functie showCalculation die 3 parameters heeft. 2 Getallen en een van onze functies.
function sum(a, b){
    return a + b;
}

const division = (a, b) => {
    return a/b;
}
const multiply = function(a, b) {
    return a*b;
}

function showCalculation(a, b, callback){
    return callback(a, b);
}

console.log(showCalculation(1, 1, sum)); //2
console.log(showCalculation(1, 1, multiply) ); //1
console.log(showCalculation(10, 2, division)); //5