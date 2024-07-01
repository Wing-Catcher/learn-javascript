/*
Variable scope = where a variable is recognize and accessible
                 (local vs global)
                 think like inside and outside
*/

// it is good to use local scoope in main program (large)
// and its okay with global scope on lil programs

//in here is global
function fungsi1(){
    // this is local scope
    let x = 1;
    console.log(x)
}
function fungsi2(){
    let x = 4;
    console.log(x)
}