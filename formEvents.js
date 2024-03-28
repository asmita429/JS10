// // Extracting form data

// let form = document.querySelector("form");
// form.addEventListener("submit", function(event) {
//     event.preventDefault(); //prevent /action url
    
//     // console.log("form submitted");

//     // let input = document.querySelector("input");
//     // console.dir(input); //input object
//     // console.log(input.innerText); // there is nothing in inner text of input
//     // console.log(input.value); //user entered text

//     // let user = document.querySelector("#user");
//     // console.log("user:", user.value);

//     // let pass = document.querySelector("#pass");
//     // console.log("password:", pass.value);
    
//     // alert(`Hi ${user.value}, your password is set to ${pass.value}`);

//     // after submitting form, display form object
//     console.dir(form);

//     console.log(form.elements[0]); //input username

//     let user = this.elements[0];  //form.elements[0]
//     let pass = this.elements[1];

//     console.log(user.value);
//     console.log(pass.value);
// });


// More Events

// input event: it fires when the value of an input, select 
// or textarea element/tag has been changed.

// change event: it occurs when the value of an element has 
// been changed (only works on input, textarea, and select element/tags)

let form = document.querySelector("form");
form.addEventListener("submit", function(event) {
    event.preventDefault();
});

let user = document.querySelector("#user");
user.addEventListener("change", function(event) {
    console.log("change event");
    console.log("final value:", this.value); 
    //value is changed but action is not performed. total changes are triggred

});

user.addEventListener("input", function() {
    console.log("input event");
    console.log("final value:", this.value);
    //value is changed & action is performed. char changes are triggred

});

// textarea

let inp = document.querySelector("#text");
let p = document.querySelector("p");
inp.addEventListener("input", function() {
    console.log(inp.value);
    p.innerText = inp.value;
});

