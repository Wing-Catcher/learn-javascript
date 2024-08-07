/**
.filter() = creates a new array by filtering out elements
 */

let numbers = [1,2,3,4,5,6,7];
let evennums = numbers.filter(isEven)
let oddNums = numbers.filter(isOdd)

console.log(evennums)
console.log(oddNums)


function isEven(element){
    return element %2 === 0;
}
function isOdd(element){
    return element %2 !== 0;
}

const ages = [16, 17, 18, 19, 20, 60];
adults = ages.filter(isAdult)
children = ages.filter(isChildren)
oldie = ages.filter(isBoomer)

console.log(`The adults: ${adults}`)
console.log(`The Children: ${children}`)
console.log(`The Grandpas: ${oldie}`)

function isAdult(element){
    return element >= 18;
}
function isChildren(element){
    return element < 18;
}
function isBoomer(element){
    return element < 55;
}

const fruits = ["pisang", "jambu", "durian", "apel", "kiwi"]

console.log(fruits.filter(short))
console.log(fruits.filter(long))

function short(element){
    return element.length <= 4;
}
function long(element){
    return element.length > 4;
}

// alright everybody that is a filter method