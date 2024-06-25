/*
How to accept user input:
1. Easy way = Windows prompt
2. Professional way = HTML textbox
*/
let username;
//username = window.prompt("Whats your username");
document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("mytext").value;
    console.log(username);
    document.getElementById("myH1").textContent = `Hello ${username}`
}