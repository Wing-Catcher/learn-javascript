/**
.map() = accpets a callback and applies that function to
        each element of an array, then return a new array
*/

const numbers = [1, 2, 3, 4, 5]
const cubed = numbers.map(cube)
const squared = numbers.map(square)

function cube (element){
    return Math.pow(element, 3)
    // always in return
}
function square(element){
    return Math.pow(element, 2)
}

console.log(cubed, squared)

const students = ["spongebob", "patrick", "squidward", "sandy"]
const studentsUpper = students.map(upperCase)
function upperCase(element){
    return element.toUpperCase()
}

console.log(...studentsUpper)

const dates = ["2023-2-5", "2032-9-10"]
const formattedDates = dates.map(formatDates)
console.log(formattedDates)

function formatDates(element){
    let parts = element.split("-")
    // parts is an array
    return `Year: ${parts[0]}, Month: ${parts[2]}, Date: ${parts[1]}`
}