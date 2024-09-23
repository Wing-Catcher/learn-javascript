/*
static = keyword that defines properties or methods that belong
         to a class itself rather than the objects created
         from that class (class owns anything static, not the objects)

static = kata kunci yang mendefinisikan properti atau metode
         yang dimiliki oleh suatu kelas itu sendiri,
         bukan objek yang dibuat dari kelas tersebut
         (kelas memiliki sesuatu yang statis, bukan objek)
*/

class MathUtil{
    static PI = 3.14; // Mendefinisikan konstanta PI sebagai properti statis kelas MathUtil

    static getDiameter(radius){
        // Menghitung diameter lingkaran (2 x radius)
        return radius * 2;
    }

    static getCircumference(radius){
        // Menghitung keliling lingkaran (2 x PI x radius)
        return 2 * this.PI * radius;
    }

    static getArea(radius){
        // Menghitung luas lingkaran (PI x radius^2)
        return this.PI * Math.pow(radius, 2);
    }
}

console.log(MathUtil.getDiameter(20)); // Memanggil metode statis getDiameter dengan radius 20
console.log(MathUtil.getCircumference(20)); // Memanggil metode statis getCircumference dengan radius 20
console.log(MathUtil.getArea(30)); // Memanggil metode statis getArea dengan radius 30

class User{
    static userCount = 0; // Properti statis untuk menghitung jumlah user

    constructor(username){
        this.username = username; // Menyimpan username ke dalam properti instance
        User.userCount++; // Setiap kali objek baru User dibuat, userCount akan bertambah 1
    }

    sayHello(){
        // Metode yang mencetak username dari objek user
        console.log(`My username is ${this.username}`);
    }
}

const user1 = new User("spongebob"); // Membuat instance user baru dengan username "spongebob"
const user2 = new User("patrick"); // Membuat instance user baru dengan username "patrick"
user1.sayHello(); // Memanggil metode sayHello dari user1
user2.sayHello(); // Memanggil metode sayHello dari user2
console.log(`The usercount is ${User.userCount} <==`); // Menampilkan jumlah user yang telah dibuat
