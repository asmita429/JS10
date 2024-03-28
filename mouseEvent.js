// mouseout event

let h1 = document.querySelector("h1");
h1.addEventListener("mouseout", function() {
    h1.innerText = "mouse Out!";
});

// keypress event

// let inp = document.querySelector("input");
// inp.addEventListener("keypress", function() {
//     console.log("key pressed");
// });

// scroll event, where p must have height/property > div height/property 
let div = document.querySelector("div");
let p = document.querySelector("p");
div.addEventListener("scroll", function(event) {
    p.innerText = "scroll event fired!";
});

// load event

// change button's color
let btn = document.querySelector("button");
btn.addEventListener("click", function() {
    btn.style.backgroundColor = "green";
});

// Explore in future to dynamically print name in h1
let inp = document.querySelector("input");
inp.addEventListener("keypress", function() {
    console.log(event);
    if((event.key >= "a" && event.key <= "z") || 
    (event.key >= "A" && event.key <= "Z") || 
    event.key == " ") {
        h1.innerText = event.key;
    }
    // h1.innerText = event.key;
})