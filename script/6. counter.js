// Counter program

const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

function decrease() {
    count--;
    countLabel.textContent = count;
}
function increase(){
    count++;
    countLabel.textContent = count;
}
function reset() {
    count = 0
    countLabel.textContent = count;
}
