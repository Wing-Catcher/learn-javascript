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

const spongebob = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 70,
    isEmployed: true,
    sayHello: function(){
        console.log(`Hii my name is Sponegbobb`)
    }
}

console.log(spongebob.firstName);
console.log(spongebob.lastName);
console.log(spongebob.age);
console.log(spongebob.isEmployed);
spongebob.sayHello()