function FahrenheitToCelcius(){
    let fahrenheit = document.getElementById("input").value;
    fahrenheit = Number(fahrenheit);
    if (isNaN(fahrenheit)){
        console.log("Invalid Number");
        return "Invalid Number"
    }
    else{
        let celcius = Math.round(((fahrenheit - 32) * 5)/9);
        console.log(celcius);
        return celcius;
    }
}

function CelciusToFahrenhrit(){
    let celcius = document.getElementById("input").value;
    celcius = Number(celcius);
    if (isNaN(celcius)){
        console.log("Invalid Number");
        return "Invalid Number"
    }
    else{
        let fahrenheit = ((9 * celcius) / 5) + 32;
        console.log(fahrenheit);
        return fahrenheit;
    }
}

function submit(){
    const toCelcius = document.getElementById("toCelcius");
    const toFahrenheit = document.getElementById("toFahrenheit");
    let result = document.getElementById("result");
    if (toCelcius.checked){
        result.value = FahrenheitToCelcius()
    }
    else if (toFahrenheit.checked){
        result.value = CelciusToFahrenhrit()
    }
    else{
        result.value = "Error: Unchecked"
    }
}