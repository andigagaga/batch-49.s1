class Car {
    constructor(make, model){
        this.make = make,
        this.model = model
    }

    getInfo() {
        return `mobil saya mereknya ${this.make} type ${this.model}`
    }
}

let myCar1 = new Car("suzuki", " x")
let myCar2 = new Car("honda", " y")
let myCar3 = new Car("yamaha", " z")


console.log(myCar1.getInfo());
console.log(myCar2.getInfo());
console.log(myCar3.getInfo());