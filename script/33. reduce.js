// .reduce = reduce the elements of an array
//          to a single value

// .reduce = mengurangi elemen array
//          ke satu nilai

const prices = [5, 30, 10, 15, 10]
const total = prices.reduce(sum)

const grades = [70, 75, 80, 85, 90, 95];
const max = grades.reduce(getMax);
function getMax(accumulator, element){
    return Math.max(accumulator,element)
}

function sum(accumulator, element){
    return accumulator + element
}

console.log(`$${total}`)
console.log(`Minimum${max}`)