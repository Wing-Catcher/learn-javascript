// function =   A section of reusable code.
//              declare code once, use it whenever you want
//              call the function to execute the code

function happyBirthday(){
    console.log("Happy birthday to you");
    console.log("Happy birthday to you");
    console.log("Happy birthday to you");
}
function tellAge(name, age){
    console.log(`hello ${name}`)
    console.log(`You are ${age} years old.`)
}
tellAge("Brocode" , 34);
tellAge("spongebob" , 99);
tellAge("Patrick", 44)

function addNumber (x, y){
    return x + y
}
function substractNumber(x, y){
    return x - y
}
function multiply (x, y){
    return x * y
}
function divide (x, y){
    return x / y
}
function evenNumber(number){
    if (number % 2 === 0){
        return true
    }
    else{
        return false
    }
}
function isvalidEmail(email){
    return email.includes('@') ? true:false
    // ternary operator
}

console.log(addNumber(23, 44))
console.log(substractNumber(23, 44))
console.log(multiply(23, 44))
console.log(divide(23, 44))
console.log(evenNumber(30))
console.log(isvalidEmail("hehehehe@gmail.fuck"))