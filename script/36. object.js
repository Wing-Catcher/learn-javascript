/*

Object = A collection of related properties and/or methods
         Can represent real world objects (people, products, places)
         Object = {key: value,
                   function()}

Objek = Kumpulan properti dan/atau metode yang terkait
        Dapat mewakili objek dunia nyata (orang, produk, tempat)
        Objek = {kunci: nilai,
                 fungsi()}

*/

const ayah = {
    firstName: "Bapak",
    lastName: "Suryanto",
    age: 40,
    isEmployed: true,
}

const spongebob = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 70,
    isEmployed: true,
    sayHello: function(){
        console.log(`Hii my name is Sponegbobb`)
    }
}

console.log(ayah.firstName);
console.log(ayah.lastName);
console.log(ayah.age);
console.log(ayah.isEmployed);

spongebob.sayHello()