/*
foreach() = method to iterate over the elements of an array and apply
            a specified function (callback) to each element

            array.foreach(callback)
            element, index, array are provided
*/

let numbers = [1,2,3,4,5];
const names = ["joko", "jono", "dono"]
function display(element){
    console.log(element)
}

function double(element, index, array){
    array[index] = element * 2
    // numbers[index] = element * 2
}
function triple(element, index, array){
    array[index] = element * 3
}
function squared(element, index, array){
    array[index] = Math.pow(element, 2)
}
function cube(element, index, array){
    array[index] = Math.pow(element, 3)
}
function hello(element){
    console.log(`Hello, ${element}`)
}


numbers.forEach(squared) 
numbers.forEach(display)
numbers.forEach(function(element, index){
    console.log(`Element = ${element}, Index = ${index}`)
})
names.forEach(hello)