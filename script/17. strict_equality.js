// =    assignment operator
// ==   comparison operator (compare if values and are equal)
// ===  strict equality operator (compare if values and datatype are equal)
// !=   inequality operator
// !==  strict inequality operator

// =    operator penugasan
// ==   operator perbandingan (membandingkan apakah nilai-nilai tersebut sama)
// ===  operator kesetaraan ketat (membandingkan apakah nilai-nilai dan tipe datanya sama)
// !=   operator ketidaksetaraan
// !==  operator ketidaksetaraan ketat

const PI = 3.14;
const PIE = "123";
if (PI == "3.14"){
    console.log("Compariosn Operator == True");
}
else if (PI === 3.14){
    console.log("Strict Equality === True");
}

if (PIE !== 123){
    console.log("That is not a PIE in number datatype");
}
else{
    console.log("That is PIE");
}