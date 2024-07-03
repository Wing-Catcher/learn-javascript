// Spread oeprator  = ... allows an iterable sucah as an array or string
//                    to be expanded into seperate element
//                    (unpacks the element)

let numbers = [1,2,3,4,5];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);

console.log(maximum);
console.log(minimum);

let username = "Bro code";
let letters = [...username].join("-");
console.log(letters)

let fruits = ["apple", "orange", "mango"];
let vegetables = ["cabbage", "corn", "carrot", "spinach"]
let newFruits = [...fruits]
// outputs the same
console.log(fruits)
console.log(newFruits);


// combine the output
let foods = [...fruits, ...vegetables, "egg", "milk"];
console.log(foods)
