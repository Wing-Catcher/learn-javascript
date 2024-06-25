// const = sebuah variabel yangtidak dapat diubah
//          a variable that cannot be changed in any way

function execute(){
    const PI = 3.14;
    radius = document.getElementById("myNum").value;
    radius = Number(radius);
    result = 2 * PI *radius;
    console.log(`result: ${result}`);
    document.getElementById("myH3").textContent = `The result is: ${result}`;
}
function reset(){
    document.getElementById("myNum").value = "";
    document.getElementById("myH3").textContent = "Resetted"
}