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
    static PI = 3.14

    static getDiameter(radius){
        return radius * 2
    }

    static getCircumference(radius){
        return 2 * this.PI * radius
    }

    static getArea(radius){
        return this.PI * Math.pow(radius, 2)
    }
}

console.log(MathUtil.getDiameter(20))
console.log(MathUtil.getCircumference(20))
console.log(MathUtil.getArea(30))

class User{
    static userCount = 0;

    constructor(username){
        this.username = username
        User.userCount ++
    }

    sayHello(){
        console.log(`My username is ${this.username}`)
    }
}

const user1 = new User("spongebob");
const user2 = new User("patrick");
user1.sayHello()
user2.sayHello()
console.log(`The usercount is ${User.userCount} <==`)