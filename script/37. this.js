/*
this = reference to the object where THIS is used
       (the object depends on the immediate context)
       person.name = this.name

this = referensi ke objek di mana THIS digunakan
       (objeknya tergantung pada konteks langsung)
       person.name = this.name

*/

const spongebob = {
    name: "spongebob",
    favfood: "krabby patty",
    sayHello: function(){console.log(`Hi i am ${name} (without .this)`)},
    sayAgain: function(){
        console.log(`Hello my name is ${this.name}`)
        console.log(`My favorite food is ${this.favfood}`)
    }
}

const marcel = {
    nama: "Marcel",
    nama_lengkap: "Marcel Dita Nugraha",
    sayName: function(){
        console.log(this.nama_lengkap)
    },
}
marcel.sayName()
spongebob.sayHello()
spongebob.sayAgain()

// out of object, "this" reference to window object
// basicly we're already in the object called window object

// however the ".this" does not work with arrow function
const box = {
    name: "Brown Box",
    callSelf: () => {
        console.log(`Hii im a ${this.name}`)
    }
}
box.callSelf()