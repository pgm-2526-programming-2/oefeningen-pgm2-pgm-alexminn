//Oefeningen 1,2 & 3; - Functies

function greetings(name){
    const message = "Hallo daar, " + name + "!";
    return message;
}

console.log(greetings("Anna"));
 //Oef 3. Standaard parameters (to do)

//Oefening 4; - Functie met parameters en interne logica
function controlAge(age){
    if(age <= 18) {
        console.log("Nog niet volwassen")
    } else {
        console.log("Volwassen")
    }
}

controlAge(19);

//Oefening 5 - Return
//Werkt deze functie nog als verwacht als je de else weghaalt?

/*function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm("Did parents allow you?");
    }
}

/*function checkAge(age) {
    if (age > 18) {
        return true;
    }
    return confirm("Did parents allow you?");
}

checkAge(16); Ja, die return word een else dankzij die if. */

//Oefening 6 - Callback



//Oefening 7 - Pass By
function increaseByTen(NewNumber){
    newNumber = myNumber * 10;
    return newNumber;
}


let myNumber = 20;
increaseByTen(myNumber);
console.log("Number:", myNumber);
console.log("New number: ", increaseByTen());


//Oefening 8 - Scope

const oldNumber =  3; //Globaal

function scope(){
    const oldNumber = 8; //Lokaal
    return oldNumber;
}

console.log(oldNumber);
console.log(scope());




//Oefening 9 - Todo List



