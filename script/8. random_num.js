// Random number generator

// logic = set the number in range from zero to 6 exclusive
// then well round it to become integer val
// then we add plus 1 to make the output no zero (Just 1 to 6 integer)
const myButton = document.getElementById("myButton");
const label1 = document.getElementById("myLabel1");
const label2 = document.getElementById("myLabel2");
const label3 = document.getElementById("myLabel3");
const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;


// js is blind of id so they need to make as if variables
myButton.onclick = function(){
    randomNum1 = Math.floor(Math.random() * max) + min;
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;
    label1.textContent = randomNum1;
    label2.textContent = randomNum2;
    label3.textContent = randomNum3;
}