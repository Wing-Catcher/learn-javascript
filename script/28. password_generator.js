// Random Password Generator

function generatePassword(length, includeLowerCase, includeUpperCase, includeSymbols, includeNumbers){
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "1234567890";
    const symbolChars = "!@#$%^&*_+";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowerCase ? lowercaseChars : "";
    allowedChars += includeUpperCase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if (length <= 0) {
        return "(Password length must be at least 1.)";
    }
    if(allowedChars.length === 0){
        return "(At least 1 set of characters needs to be selected)";
    }
    for (let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }
    return password
}

const passwordLength = 1000;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLength, 
                                  includeLowerCase, 
                                  includeUpperCase, 
                                  includeSymbols, 
                                  includeNumbers);
// fr bro i spent 1 hour for this "password length" shit
console.log(`Generated Password ${password}`)