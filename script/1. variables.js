// Seperated
let x;
x = 1000;
console.log(x)

// Combined (declaration and assignment)
let y = 2000;
console.log(y)

// datatypes
let age = 25;
let price = 10.99;
let gpa = 4.0;
console.log(`you are ${age} years old`);
console.log(`The price is ${price} dollars`);
console.log(`your gpa is ${gpa}.`);
//typeof
console.log(typeof age);
console.log(typeof price);
console.log(typeof gpa);

//strings
// strings can nclude numbers, but the numbers cant be used for math operation
let name = "Bro";
let food = "soto babat"
let email = "brocode123@gmail.com"
console.log(typeof name);
console.log(`your name is ${name}`);
console.log(`You like ${food}.`);
console.log(`Your email is ${email}`);

//booleans
let online = false;
let sale = false;
let isStudent = true;
console.log(`bro is online: ${online}`);
console.log(`is this sale? ${sale}`);
console.log(`Is this a student ${isStudent}`);

let fullName = "Raffy hmad Jaliyyan";
age = 18;
isStudent = true;
document.getElementById("p1").textContent = fullName;
document.getElementById("p2").textContent = age;
document.getElementById("p3").textContent = `Is he student: ${isStudent}`