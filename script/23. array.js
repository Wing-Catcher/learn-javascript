// array = a variable like structure that can hold more
//         than one value

let fruits = ["apple 0", "orange 1", "banana 2"];

// insert a value to array
fruits[0] = "coconut"
fruits.push("coconut")

// pop out the way the last value of array
fruits.pop()

// against of push method
fruits.unshift("mangos")

console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[2])

let numOfFruits = fruits.length
console.log(numOfFruits);

// search for the location of value array
let index = fruits.indexOf("coconut")
console.log(index)

for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i])
}
// loops for print in backward
for (let i = fruits.length - 1; i >=0; i--){
    console.log(fruits[i])
}

fruits.sort().reverse()

for (let fruit of fruits){
    console.log(fruit)
}