/*
inheritance = allows a new class to inherit properties and methods
              from an existing class (parent -> child)
              helps with code reusability

inheritance = memungkinkan kelas baru untuk mewarisi properti dan metode
              dari kelas yang sudah ada (induk -> anak)
              membantu penggunaan kembali kode
*/

class Animal {
    // Properti umum untuk semua kelas anak (Rabbit, Fish, Bird)
    alive = true;

    // Metode umum yang akan diwarisi oleh semua kelas anak
    eat() {
        console.log(`This ${this.name} is eating`);
    }

    // Metode lain yang bisa digunakan oleh kelas anak
    sleep() {
        console.log(`This ${this.name} is sleeping`);
    }
}

// Kelas Rabbit mewarisi properti dan metode dari kelas Animal
class Rabbit extends Animal {
    // Properti khusus untuk Rabbit
    name = "rabbit";
    
    // Metode khusus untuk Rabbit
    hop() {
        console.log("\n");  // Menambahkan baris kosong di output
        console.log(`this ${this.name} is hopping`);
    }
}

// Kelas Fish mewarisi properti dan metode dari kelas Animal
class Fish extends Animal {
    // Properti khusus untuk Fish
    name = "fish";
}

// Kelas Bird mewarisi properti dan metode dari kelas Animal
class Bird extends Animal {
    // Properti khusus untuk Bird
    name = "bird";
}

// Membuat instance dari kelas Rabbit dan Bird
const rabbit = new Rabbit();
const bird = new Bird();

// Memanggil metode eat() dan sleep() yang diwarisi dari Animal
rabbit.eat();   // Output: This rabbit is eating
rabbit.sleep(); // Output: This rabbit is sleeping
bird.eat();     // Output: This bird is eating
bird.sleep();   // Output: This bird is sleeping

// Memanggil metode hop() khusus untuk Rabbit
rabbit.hop();   // Output: this rabbit is hopping
