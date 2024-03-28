// Event Listners for elements,(paragraph, dic)

// let p = document.querySelector('p');

// p.addEventListener("click", function() {
//     console.log("poaragraph was clicked");
// });

// let box = document.querySelector(".box");
// box.addEventListener("mouseenter", function() {
//     console.log("mouse inside box");
// });


// 'this' in Event Listners
// when this is used in a callback of event handler of something, it refers to that obj

let btn = document.querySelector("button");
btn.addEventListener("click", function() {
    console.log(this); //button 
    console.dir(this); //button object

    console.dir(this.innerText); //click me
    this.style.backgroundColor = "green";
});

// combined event listner
let para = document.querySelector('p');
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");

// para.addEventListener("click", function() {
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// });

// h1.addEventListener("click", function() {
//     this.style.backgroundColor = "blue";
// });

// h3.addEventListener("click", function() {
//     this.style.backgroundColor = "blue";
// });

// alternative
function changeColor() {
    console.dir(this.innerText);
    this.style.backgroundColor = "lightblue";
}

para.addEventListener("click", changeColor);

h1.addEventListener("click", changeColor);

h3.addEventListener("click", changeColor);

