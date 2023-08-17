class Car {
    constructor(make, mode){
        this.make = make,
        this.mode = mode
    }

    getIfo() {
        return `saya punya mobil ${this.make} , ${this.mode}`
    }
}

class electriCar extends Car {
    constructor(make, mode, colour) {
        super(make, mode)
        this.colour = colour
    }

    getIfo() {
        return `saya punya mobil ${super.getIfo()}, ${this.colour}`
    }
}

let myCar = new electriCar("toyota", "x", "black");

console.log(myCar.getIfo())