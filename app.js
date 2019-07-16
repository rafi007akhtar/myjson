// use these creds
let myName = "Rafi";
let myPass = "rafi@tcs";

let submit = document.querySelector("#submit");

submit.addEventListener("click", function() {
    let name = document.querySelector("#name").value;
    let pass = document.querySelector("#pass").value;
    
    let display = document.querySelector("#display");
    let details = document.querySelector("#details");
    
    if (name == myName && pass == myPass) {
        alert("Login successful");
        // URL: https://api.myjson.com/bins/yangz
        let httpRequest = new XMLHttpRequest();
        if (! httpRequest) {
            alert("Cannot retrieve data.");
            return false;
        }
        httpRequest.onreadystatechange = function() {
            if (httpRequest.readyState === XMLHttpRequest.DONE) {
                if (httpRequest.status === 200) {
                    let data = JSON.parse(httpRequest.responseText);
//                    console.log(data);
                    details.style.visibility = "visible";
                    for (let key in data) {
                        display.innerHTML = `${display.innerHTML} <li> ${key.toUpperCase()}: ${data[key]} </li>`
                    }
                }
            }
        }
        httpRequest.open("GET", "https://api.myjson.com/bins/yangz");
        httpRequest.send();
    }
    else {
        alert("Login failed");
        display.textContent = "";
        details.style.visibility = "hidden";
    }
});
