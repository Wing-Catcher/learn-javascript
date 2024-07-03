/*
rest parameters = (...rest) allow a function work wiwth a variable number of
                    arguments by bundling them into an array

                    spread = expands an array into seperate elemnets
                    rest = bundles seperate elements into an array
                    more like it does the opposite
*/

function openFridge(...foods){
    // accepts any numbers of arguments
    console.log(`in array: ${foods}`)
    console.log(...foods)
}

const food1 = "pizza";
const food2 = "soto";
const food3 = "bakwan";
const food4 = "nasi goreng";

openFridge(food1, food2, food3, food4)
/*
    Logic   =   openFridge function will output the array of 
                food1~food4 combined

    output  =   Array(4) [ "pizza", "soto", "bakwan", "nasi goreng" ]
*/

// Variation 2
console.log("This is drinks");
function getDrinks(...drinks){
    return drinks
}

const drink1 = "orange juice";
const drink2 = "apple juice";
const drink3 = "mango juice";
const drink4 = "milk";

allDrinks = getDrinks(drink1, drink2, drink3, drink4);
console.log(allDrinks);

// advanced using for loops
console.log("Advanced: with for loop");
function combineStrings(...names){
    return names.join(" ")
    // add " " to seperate all the names combined
}
const allname = combineStrings("Raffy", "Ahmad", "Jaylani");
console.log(allname);