/*
type conversion = change datatype of a value to another
(strings, number, booleans)

let age;
age = window.prompt("How old are you");
age = Number(age)
age += 1;
console.log(age, typeof age)
*/

let x = "pizza";
let y = "pizza";
let z = "";

x = Number(x);
y = String(y);
z = Boolean (z);

// NaN not a number
// false for nothing in string

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);