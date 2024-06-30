// Method Chaining  =   Calling one method after another
//                      in one continuous line of code

// --- NO METHOD CHAINING ---

let username = window.prompt("Enter ur username");

username = username.trim();
let firstChar = username.charAt(0);
firstChar = firstChar.toUpperCase();
let extras = username.slice(1);
extras = extras.toLowerCase()
username = firstChar + extras;

console.log (username)

// --- METHOD CHAINING (Programming technique) ---
let fullName = window.prompt("What is your fullname: ");
fullName = fullName.trim().charAt(0).toUpperCase() + fullName.trim().slice(1).toLowerCase();
console.log(fullName);