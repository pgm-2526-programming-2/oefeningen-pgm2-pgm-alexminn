// Theorie

const firstname = 'Student'; //Primitief
const age = 20; //Primitief
const isStudent = true; //Primitief
const hobbies = ['Gaming', 'Soccer']; //Samengesteld of reference type
const adress = {                      //Samengesteld of reference type
    street: 'New York Straat',
    number: 4
}

let nickname = firstname;
const interests = hobbies;

nickname = 'GamerBoy'; //Primitief = kopie bij referentie naar nieuw element. Als je het nieuwe element wijzigt wijzigt het oude element niet mee. BV: firstname =/= GamerBoy.
interests.push('Kitesurfen'); //Samengesteld = De twee elementen blijven gelinkt. Als je het nieuwe element wijzigt wijzigt het oude element wel mee. BV: hobbies = ['Gaming', 'Soccer', Kitesurfen]

console.log(interests, hobbies);

let total = 0;


function addFiveToNumber(a = 0) {
    total = a + 5;
    console.log(a + 5);
}

addFiveToNumber(2);

console.log('Totaal: ', total);

function doubleNumber(num) {
    num = num * 2;
    console.log('Binnen functie: ', num);
    
}

function doubleNumberWithReference(obj) {
    obj.number = obj.number * 2;
    console.log('Binnen ref-functie: ', obj.number);
    
}

let originalNumber = 5;
let originalNumberAsReferenceType = {
    number: 5
}

doubleNumber(originalNumber); //10, dubbele van ogNumber
console.log('Original number uit functie', originalNumber); //nogsteeds 5

doubleNumberWithReference(originalNumberAsReferenceType) //10, dubbele van ogNumberAsRef
console.log('Original number uit ref-functie: ', originalNumberAsReferenceType); //Nogsteeds 10... (gezien samengesteld datatype)


