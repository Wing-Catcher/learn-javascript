/*
String slicing = creating substring from a portion of
                anothrt string
                string.slice(start, end)
*/
let fullName = "Wing Catcher"
let firstname = fullName.slice(0, 4);
let lastName = fullName.slice(5, 12);
let firstChar = fullName.slice(0, 1);
let lastChar = fullName.slice(-1);
console.log(firstname);
console.log(lastName);
console.log(`The first char ${firstChar}`);
console.log(`The last char ${lastChar}`);

// The more dynamic way to do it
fullName = "Star Catcher";
firstname = fullName.slice(0, fullName.indexOf(" "));
// the space will be included if we dont add +1
lastName = fullName.slice(fullName.indexOf(" ") + 1);
console.log(firstname);
console.log(lastName);

// exercise yoo
const email = "starcatcher@gmail.com";
const userName = email.slice(0, email.indexOf("@"));
const domain = email.slice(email.indexOf("@") + 1);
console.log(`Your Username is ${userName}`);
console.log(`Your domain is ${domain}`);