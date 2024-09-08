/*
arrow function = cara ringkas untuk menulis ekspresi fungsi
                 bagus untuk fungsi sederhana yang hanya digunakan sekali
                 (parameter) => beberapa kode
*/
const greeting = (name, age) => {
    console.log(`Good evening ${name}`);
    console.log(`Your age is ${age} old.`);
}
greeting("jono", "34")
/*
output = Good evening jono
         Your age is 34 old.
*/

// usual function
function hello(){
    console.log(`hello() Hello world`);
}

// or
const hi = function(){
    console.log(`Hello world`);
}


// with set timeout
setTimeout(() => {
    console.log("Hello world")
}, 3000);

let numbers = [10, 20, 30, 40, 50];
const squares = numbers.map((element) => Math.pow(element, 2));
const cubed = numbers.map((element) => Math.pow(element, 3));
console.log(squares);
console.log(cubed);
/*
.map() = accpets a callback and applies that function to
        each element of an array, then return a new array
*/

const maximum = numbers.reduce((accumulator, element) => Math.max(accumulator, element))
const minimum = numbers.reduce((accumulator, element) => Math.min(accumulator, element))
console.log(maximum);
console.log(minimum);
/*
.reduce = reduce the elements of an array
          to a single value
*/

let sentences = ["hello", "indonesia", "Trenggalek", "dani"]
const thanFive = sentences.filter((element) => element.length > 5);
const belowSeven = sentences.filter((element)=> element.length < 7);
console.log(thanFive);
console.log(belowSeven);