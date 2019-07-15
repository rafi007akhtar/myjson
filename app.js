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
        $.ajax({
            url:"https://api.myjson.com/bins/yangz",
            type:"GET",
            data:'{"key":"value"}',
            contentType:"application/json; charset=utf-8",
            dataType:"json",
            success: function(data, textStatus, jqXHR){
//                console.log(data);
                
                details.style.visibility = "visible";
                for (let key in data) {
                    display.innerHTML = `${display.innerHTML} <li> ${key.toUpperCase()}: ${data[key]} </li>`
                }
            }
        }); 
    }
    else {
        alert("Login failed");
        display.textContent = "";
        details.style.visibility = "hidden";
    }
});
