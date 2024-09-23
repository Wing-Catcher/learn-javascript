/*
super = keyword is used in classes to call the constructor
        or access the properties and methods of a parent (superclass)
        this = this object
        super = the object

super = kata kunci yang digunakan dalam kelas untuk memanggil konstruktor
        atau mengakses properti dan metode induk (superclass)
        this = objek ini
        super = objek
*/

class Animal {
    // Konstruktor kelas induk yang menerima parameter name dan age
    constructor(name, age) {
        this.name = name; // Menyimpan nama di properti this.name
        this.age = age;   // Menyimpan umur di properti this.age
    }
}

class Rabbit extends Animal {
    // Konstruktor kelas Rabbit menerima parameter tambahan runSpeed
    constructor(name, age, runSpeed) {
        super(name, age);  // Memanggil konstruktor kelas induk (Animal) dengan super
        this.runSpeed = runSpeed; // Properti tambahan khusus untuk Rabbit
    }
}

class Fish extends Animal {
    // Konstruktor kelas Fish menerima parameter tambahan swimSpeed
    constructor(name, age, swimSpeed) {
        super(name, age);  // Memanggil konstruktor kelas induk (Animal) dengan super
        this.swimSpeed = swimSpeed; // Properti tambahan khusus untuk Fish
    }
}

class Bird extends Animal {
    // Konstruktor kelas Bird menerima parameter tambahan flySpeed
    constructor(name, age, flySpeed) {
        super(name, age);  // Memanggil konstruktor kelas induk (Animal) dengan super
        this.flySpeed = flySpeed; // Properti tambahan khusus untuk Bird
    }
}

// Membuat instance Rabbit dengan nama "Hoppy", umur 12, dan kecepatan lari 45
const rabbit = new Rabbit("Hoppy", 12, 45);

// Membuat instance Fish dengan nama "Jack", umur 12, dan kecepatan renang 33
const fish = new Fish("Jack", 12, 33);

// Membuat instance Bird dengan nama "Garuda", umur 12, dan kecepatan terbang 33
const bird = new Bird("Garuda", 12, 33);

// Menampilkan properti name dari setiap instance
console.log(rabbit.name); // Output: Hoppy
console.log(fish.name);   // Output: Jack
console.log(bird.name);   // Output: Garuda
