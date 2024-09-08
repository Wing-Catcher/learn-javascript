/*
constructor = special method for defining the properties
              and methods of objects

konstruktor = metode khusus untuk mendefinisikan properti
              dan metode objek
*/

function Car(brand, model, year, color){
    this.brand = brand,
    this.model = model,
    this.year = year,
    this.color = color,
    // lets add a method
    this.drive = function(){
        console.log(`You drive a ${this.model}`)
    }
}
const car2 = new Car("BMW", "M5", 2024, "Blue");
const car1 = new Car("Toyota", "Supra", 2017, "Red");

console.log(car1.brand);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);
car1.drive();

console.log(car2.brand);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);
car2.drive();