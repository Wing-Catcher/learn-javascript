const min = 1
const max = 10
const answer = Math.round(Math.random() * (max - min + 1)) + min;
console.log(answer)

let attempts = 0;
let guess;
let running = true;

while (running){
    guess = window.prompt(`Guess the number between ${min} to ${max}:`)
    guess = Number(guess)
    if(isNaN(guess)){
        window.alert("Please input a valid number")
    }
    else if(guess < min || guess > max){
        window.alert("Please enter a valid number (Too much or too little)")
    }
    else{
        attempts++;
        if (guess < answer){
            window.alert("Too low, try again")
        }
        else if(guess > answer){
            window.alert("Too high, try again.")
        }
        else{
            window.alert(`Correct, the answer ${answer}`)
            window.alert(`attempts = ${attempts}`)
            running = false;
        }
    }
}
