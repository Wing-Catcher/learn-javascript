//ternary operator = a shortcut to if{} and else{} statements
//                   helps to assign a variable based on condition
//                   condition ? codeIftrue : codeIfFalse

let age;

age = 11
let message = age > 18 ? "Youre an adult" : "youre a minor";
console.log(message);

let time = 16
let greeting = time > 12 ? "Good Morning" : "Good Afternoon";
console.log(greeting);

let isStudent = false;
message = isStudent ? "Youre a students" : "Youre not a student";
console.log(message);

let purchaseAmount = 1300;
let discount = purchaseAmount > 1000 ? 100 : 0;
console.log(discount);
console.log(`Your total purchase after discount: ${purchaseAmount - (discount/purchaseAmount)}`)