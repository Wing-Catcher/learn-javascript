// put the decaration inside of the function since you want
// to make it update able

function seeResult(){
    let age = document.getElementById("myNum").value
    const mySubmit = document.getElementById("submit")
    const result = document.getElementById('result')
    if (age >= 18){
        result.textContent = `Hello you may enter this site, since you are ${age}`
    }
    else if(age < 18){
        result.textContent = `You cannot enter this site, since you are ${age}`
    }
    else{
        result.textContent = "You are banned"
    }
}