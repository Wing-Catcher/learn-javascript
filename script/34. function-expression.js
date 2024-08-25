// function declaration = define a reusable block of code
//                        that performs a specific task

// function expression = a way to define function as values or variables

// deklarasi fungsi = mendefinisikan blok kode yang dapat digunakan kembali
//                    yang melakukan tugas tertentu

// ekspresi fungsi = cara mendefinisikan fungsi sebagai nilai atau variabel

// benefits:
/*
1. Callbacks in asnycronous operations
2. higher-order functions
3. Closures
4. Event listeners
*/
function hello(){
    console.log("function hello() is declaration")
    console.log("started by you type 'function'")
}

const halo = function(){
    console.log("halo")
}
setTimeout(halo, 3000)

// instead of callback
setTimeout(function(){
    console.log("hello world")
}, 3000)


// with arrayz
const numbers = [1, 2, 3, 4, 5, 6, 7]
const squares = numbers.map(function(element){
    return Math.pow(element, 2);
});
console.log(squares)

//.map() = accpets a callback and applies that function to
//        each element of an array, then return a new array

cubes = numbers.map(function cube(element){
    return Math.pow(element, 3)
})
console.log(cubes)

const evenNums = numbers.filter(function(element){
    return element % 2 === 0;
})
console.log(evenNums)

const oddNums = numbers.filter(function(element){
    return element % 2 !== 0;
})
console.log(oddNums)

const total = numbers.reduce(function(accumulator, element){
    return accumulator + element;
});
console.log(total)

// .reduce = reduce the elements of an array
//          to a single value

