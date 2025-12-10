const student = Symbol("Yme");
const person = Symbol("Yme");

console.log(student, student.toString(), student.description, student === person);

// Uppercase variables - waarden die nooit zullen veranderen & je gebruikt die in heel je project! "Optie"
const STATES = {
    LOADING: Symbol("Laden"),
    LOADED: Symbol("Laden")
}

console.log(STATES.LOADED === STATES.LOADING);