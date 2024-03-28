// Extracting form data

let form = document.querySelector("form");
form.addEventListener("submit", function(event) {
    event.preventDefault(); //prevent /action url
    
    // console.log("form submitted");

    // let input = document.querySelector("input");
    // console.dir(input); //input object
    // console.log(input.innerText); // there is nothing in inner text of input
    // console.log(input.value); //user entered text

    // let user = document.querySelector("#user");
    // console.log("user:", user.value);

    // let pass = document.querySelector("#pass");
    // console.log("password:", pass.value);
    
    // alert(`Hi ${user.value}, your password is set to ${pass.value}`);

    // after submitting form, display form object
    console.dir(form);

    console.log(form.elements[0]); //input username

    let user = this.elements[0];  //form.elements[0]
    let pass = this.elements[1];

    console.log(user.value);
    console.log(pass.value);
});

