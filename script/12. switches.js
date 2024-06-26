// SWITCH = can be an efficient replacement o many if elses statements
// You need break to break out the switch
let day = 7;

switch(day){
    case 1:
        console.log("It is monday");
        break;
    case 2:
        console.log("It is Tuesday");
        break;
    case 3:
        console.log("It is wednesday");
        break;
    case 4:
        console.log("It is thursday");
        break;
    case 5:
        console.log("It is Friday");
        break;
    case 6:
        console.log("It is Saturday");
        break;
    case 7:
        console.log("It is sundae");
        break;
    default:
        console.log(`${day} is not a day`)
}

let score = 89;
let letterGrade;

switch(true){
    case score >= 90:
        letterGrade = "A"
        break;
    case score >= 80:
        letterGrade = "B"
        break;
    case score >= 70:
        letterGrade = "C"
        break;
    case score > 70:
        letterGrade = "F"
    default:
        letterGrade = "EF"
}
console.log(letterGrade)
// default is like a else
// break for stop