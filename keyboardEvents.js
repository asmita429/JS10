// Keyboard Events

let btn = document.querySelector("button");

// btn.addEventListener("click", function( event ) {
//     console.log(event); //PointerEvent
//     console.log("button clicked");
// });

btn.addEventListener("dblclick", function( event ) {
    console.log(event); //MouseEvent
    console.log("button clicked");
});


let input = document.querySelector("input");

input.addEventListener("keydown", function() {
    // console.log(event); //event obj: KeyboardEvent (code:"keyA" , key:"b")

    // console.log("key was pressed");

    // key values ArrowUp, ArrowDown, ArrowLeft, ArrowRight 
    console.log("code =", event.code);

    if(event.code == "ArrowUp") {
        console.log("character moves forward");
    } else if (event.code == "ArrowDown") {
        console.log("character moves downward");
    } else if (event.code == "ArrowLeft") {
        console.log("character moves left");
    } else if (event.code == "ArrowRight") {
        console.log("character moves right");
    }

    // alt
    // key values ArrowUp(U), ArrowDown(D), ArrowLeft(L), ArrowRight(R) 
    if(event.code == "KeyU") {
        console.log("character moves forward");
    } else if (event.code == "KeyD") {
        console.log("character moves downward");
    } else if (event.code == "KeyL") {
        console.log("character moves left");
    } else if (event.code == "KeyR") {
        console.log("character moves right");
    }

    // console.log("key =", event.key);
});

// input.addEventListener("keyup", function() {
//     console.log("key was released");
// });

