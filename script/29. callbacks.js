/*
callback = a function that is passed as an argument
            to another function

            used to handle asynchronus operations:
            1. Reading a file
            2. network request
            3. interacting with databases

            "Hey, when you're done, call this next"
*/
hello(wait);

function hello(callback){
    // callback = hey u should do this first before another
    console.log("Hello world")
    callback();
}
function goodbye(){
    console.log("Goodbye!")
}
function wait(){
    console.log("wait!")
}