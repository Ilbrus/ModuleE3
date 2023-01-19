class Appliance {
    constructor(name, power) {
        this.name = name;
        this.power = power;
        this.isOn = false;
    }

    turnOn() {
        this.isOn = true;
        console.log(`${this.name} has been turned on.`);
    }

    turnOff() {
        this.isOn = false;
        console.log(`${this.name} has been turned off.`);
    }
}

class Lamp extends Appliance {
    constructor(name, power, brightness) {
        super(name, power);
        this.brightness = brightness;
    }

    adjustBrightness(level) {
        this.brightness = level;
        console.log(`Brightness of ${this.name} has been adjusted to ${level}.`);
    }
}

class Computer extends Appliance {
    constructor(name, power, isLaptop) {
        super(name, power);
        this.isLaptop = isLaptop;
    }

    checkIsLaptop() {
        console.log(`${this.name} is a laptop: ${this.isLaptop}.`);
    }
}

// Create instances of appliances
const myLamp = new Lamp("Desk Lamp", 20, 50);
const myComputer = new Computer("MacBook Pro", 150, true);

// Add appliances to an array
const appliances = [myLamp, myComputer];

// Turn on some appliances and calculate power consumption
let totalPower = 0;
for (let i = 0; i < appliances.length; i++) {
    if (i % 2 === 0) {
        appliances[i].turnOn();
        totalPower += appliances[i].power;
    }
}
console.log(`Total power consumption: ${totalPower} watts.`);
