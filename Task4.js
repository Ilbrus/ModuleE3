// Parent Appliance class
function Appliance(name, power) {
    this.name = name;
    this.power = power;
    this.isOn = false;
}

Appliance.prototype.turnOn = function() {
    this.isOn = true;
    console.log(`${this.name} has been turned on.`);
};

Appliance.prototype.turnOff = function() {
    this.isOn = false;
    console.log(`${this.name} has been turned off.`);
};

// Child Lamp class
function Lamp(name, power, brightness) {
    Appliance.call(this, name, power);
    this.brightness = brightness;
}

Lamp.prototype = Object.create(Appliance.prototype);
Lamp.prototype.constructor = Lamp;

Lamp.prototype.adjustBrightness = function(level) {
    this.brightness = level;
    console.log(`Brightness of ${this.name} has been adjusted to ${level}.`);
};

// Child Computer class
function Computer(name, power, isLaptop) {
    Appliance.call(this, name, power);
    this.isLaptop = isLaptop;
}

Computer.prototype = Object.create(Appliance.prototype);
Computer.prototype.constructor = Computer;

Computer.prototype.checkIsLaptop = function() {
    console.log(`${this.name} is a laptop: ${this.isLaptop}.`);
};

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