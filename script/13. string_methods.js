// String methods = allow you to manipulate and work with text (strings)
// see the methods with adding dot after var string

let username = "WingCatcher";
let name = "Anjay Alok"
console.log(username);
console.log(`Using charAt 4 ==> ${username.charAt(4)}`);

// index of the first occurence of E letter
console.log(`Using indexOf e ==> ${username.indexOf("e")}`);

// same but the last one
console.log(`Using indexOf c ==> ${username.lastIndexOf("c")}`);

// find the length of a string
console.log(`The length of username is ==> ${username.length}`);

// delete the whitespace using trim method
console.log(`Before trim ==> ${name}`);
console.log(`Name string after trim() ==> ${name.trim()}`);

// making the string all uppercase or lowercase
console.log(`Uppercased ==> ${username.toUpperCase()}`);
console.log(`Lowercaased ==> ${name.toLowerCase()}`);

// repeating the strings
console.log(`Repeated by 6 times ==> ${username.repeat(6)}`);
console.log(`Repeated by 4 times ==> ${name.repeat(4)}`);

// starts with method
console.log(`The output will be booleans (start/ends with)`)
username = " Wingcatcher"
let result = username.startsWith(" ");
if (result){
    console.log("Your name cannot start with whitespace.");
}
else {
    console.log(username);
}

//same but the end of the string
username = "Wingcatcher "
result = username.endsWith(" ")
if(result) {
    console.log("Your last username cannot filled with empty or whitespace.")
}
else {
    console.log(username);
}

// same but universal/include
console.log("Include methods")
username = "Wing Catcher";
result = username.includes(" ");
if (result){
    console.log("Your username has white space.")
}
else{
    console.log("Your usernmae has no whitespace")
}

// repalce method
console.log("replace method")
let phoneNumber = "123-123-123-123";
result = phoneNumber.replaceAll("-", "");
console.log(phoneNumber)
console.log(`Your phone number after replaced ==> ${result}`);

//padstart and padend method/ more like a fill
console.log(phoneNumber.padStart(24, "X"));
console.log(phoneNumber.padEnd(24, "W"));