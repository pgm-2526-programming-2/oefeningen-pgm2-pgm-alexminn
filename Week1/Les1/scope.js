const message = 'Hey daar!';

//const message = 'TestTestTest!'; Globale Scope = kan const niet wijzigen.

function sayHello() {
    const message = 'Bye!' //Lokale Scope = kan const wijzigen (binnen de function)

    function say(){
        const newMessage = 'YOLO';
        console.log(message);
    }

    console.log(newMessage);
    say();
}

sayHello();
console.log(message);