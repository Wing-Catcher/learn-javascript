/*
Logical operator    =   used to continue or manipulate boolean values
                        (true) or (false)
                        AND     &&
                        OR      ||
                        NOT     !
*/
const temp = 443
console.log("--- Below are using and operator && ---")
if (temp >= 0 && temp < 41){
    console.log("The weather is good")
}
else{
    console.log("The weather is bad")
}
console.log("--- Below are using or operator ---")
if (temp <= 30 || temp < 0){
    console.log("The weather is too cold")
}
else{
    console.log("The weather is normal or too hot")
}

console.log("--- Below are using not operator ---")
const isSunny = true;
if (!isSunny){
    console.log("It Is Sunny")
}
else{
    console.log("Its not sunny")
}