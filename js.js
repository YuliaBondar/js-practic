class Vehicle{
    constructor(brand, model){
        this.brand=brand;
        this.model=model;
    }
    drive(){
        console.log(`The ${this.brand} ${this.model} is traveling.`);
        console.log("drive a car");
    }
}

class Car extends Vehicle{
    constructor(brand, model, color){
        super(brand, model);
        this.color=color;
    }
    honk(){
        console.log("Beep beep!");
    }
}

class Bike extends Vehicle{
    constructor(brand, model, type){
        super(brand, model);
        this.type=type;    
    }
    ringBell() {
        console.log("Ring ring!");
    }
    drive_1(){
        console.log("long");
    }
}

let MyCar = new Car("Toyota","Camry", "red" );
MyCar.drive();
MyCar.honk();


let MyBike = new Bike("Ttt", "t3", "moped");
MyBike.drive();
MyBike.ringBell();


