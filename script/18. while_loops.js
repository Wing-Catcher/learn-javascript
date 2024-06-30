// while loop = repeat some code WHILE some condition is true
// while loop = mengulang beberapa kode SELAMA kondisi tertentu benar

// Danger: Infinite loops will crap out ur computer

let userName = "";
while(userName === "" || userName === null){
    userName = window.prompt("Enter Your Username: ")
    console.log("Enter Your name")
}
console.log(`Hello ${userName}`)

// Do while loop (commented)
/*

userName = null;
do{
    userName = window.prompt("What is Your Username");
    console.log("Enter your username");
}while (userName === null)
console.log(`Hello ${userName}`)

*/

let loggedIn = false;
let user;
let password;

while(!loggedIn){
    user = window.prompt("What is ur username? ");
    password = window.prompt("Your Password");

    if (user === "user" && password === "123"){
        console.log("Access Granted")
        loggedIn = true
    }
    else{
        console.log("Access Denied")
    }
}