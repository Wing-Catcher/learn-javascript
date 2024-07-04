function rollDice(){
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];

    for(let i = 0; i < numOfDice; i++){

        // logic: jika i lebih kecil dari jumlah dadu
        // maka tambahkan i, setiap penambahan i, sebuah
        // bilangan acak 1 ~ 6 dibuat

        const value = Math.floor(Math.random() * 6) + 1;
        // Push value (satu satu) ke array values[]
        values.push(value)
        images.push(`<img src="/assets/dice${value}.png" alt="dice${value}">`);
    }
    diceResult.textContent = `Dice: ${values.join(`, `)}`;
    diceImages.innerHTML = images.join("");

    // for consoles
    console.log(values)
}