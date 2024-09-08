/*
class = (ES6 feature) provides a more structured and
        cleaner way to work with objects compared to traditional constructor functions
        ex. static keyword, encapsulation, inheritance.

class = (fitur ES6) menyediakan cara yang lebih terstruktur
        dan bersih untuk bekerja dengan objek dibandingkan dengan
        fungsi konstruktor tradisional, misalnya kata kunci statis, enkapsulasi, pewarisan.
*/

class Product{
    constructor(name, price){
        this.name = name,
        this.price = price;
    }
    displayProduct(){
        console.log(`Product ${this.name}`)
        console.log(`Price $${this.price.toFixed(2)}`)
    }
    calculateTotal(salesTax){
        return Math.round(this.price + (this.price * salesTax))
    }
}

const salesTax = 0.10;
const product1 = new Product("Polo shirt", 39.99);
const product2 = new Product("Shoes", 99.99);
const product3 = new Product("Underwear", 100);

product1.displayProduct()
console.log(`The price is: $${product1.calculateTotal(salesTax)}`)
product2.displayProduct()
console.log(`The price is: $${product2.calculateTotal(salesTax)}`)
product3.displayProduct()
console.log(`The price is: $${product3.calculateTotal(salesTax)}`)