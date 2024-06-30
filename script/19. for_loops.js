// for loop = repeat some code a LIMITED amount of time
// for loop = mengulang beberapa kode dalam jumlah waktu TERBATAS

for(let i = 0; i <= 10; i++){
    /*
    Logika:
    1. mendeklarasikan i / index
    2. menyatakan kondisional apabila i kurang atau sama dengan 10
    3. melanjutkan kondisional dengan menambahkan +1 pada i
    */
    console.log(`Hello this is the index ${i}`)
}
for (let x = 0; x <= 20; x++){
    if (x == 13){
        continue;
        // skips the iterations
    }
    else if (x == 19){
        break;
        // exit the loop
    }
    else{
        console.log(`The x: ${x}`)
    }
}