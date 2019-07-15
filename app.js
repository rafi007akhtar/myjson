// use these creds
let myName = "Rafi";
let myPass = "rafi@tcs";

let submit = document.querySelector("#submit");

submit.addEventListener("click", function() {
    let name = document.querySelector("#name").value;
    let pass = document.querySelector("#pass").value;
    
    if (name == myName && pass == myPass) {
        alert("Login successful");
    }
    else {
        alert("Login failed");
    }
});
