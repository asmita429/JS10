// DOM Events
// events are signals that something has occurred.(user inputs/actions)

// onclick(when an element is clicked)
// onmouseenter(when mouse enters an element)

let btn = document.querySelector("button");
console.dir(btn); //button object & its properties

btn.onclick = function() {
    // alert("button clicked");
    console.log("button was clicked");
};


// function sayHello() {
//     alert("hello");
// }
btn.onclick = sayHello;

let btns = document.querySelectorAll("button");
for(btn of btns) {
    btn.onmouseenter = function() {
        console.log("you entered cursor on btn");
    }
    btn.onclick = sayHello;
    // btn.onclick = sayHi; //onclick property can have only single value
}

// Event Listner
// addEvenetListner -> element.addEvenetListner( event, callback)
let buttons = document.querySelectorAll("button");

for (btn of buttons) {
    // not possible with onclick property, so we use addEventListner
    // btn.onclick = sayHello;
    // btn.onclick = sayHi;

    // btn.addEventListener("click", sayHello);
    // btn.addEventListener("click", sayHi);

    btn.addEventListener("dblclick", function() {
        console.log("double clicked");
    })
}

function sayHi() {
    console.log("Hi!");
}

function sayHello() {
    console.log("Hello!");
}

// search addeventlistner mdn
// mouse, form, keyboard events
