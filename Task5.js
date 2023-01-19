class Appliance {
    constructor(name, power) {
        this.name = name;
        this.power = power;
        this.isOn = false;
    }

    turnOn() {
        this.isOn = true;
        console.log(`${this.name} - включено.`);
    }

    turnOff() {
        this.isOn = false;
        console.log(`${this.name} - выключено.`);
    }
}

class Lamp extends Appliance {
    constructor(name, power, brightness) {
        super(name, power);
        this.brightness = brightness;
    }

    adjustBrightness(level) {
        this.brightness = level;
        console.log(`Яркость ${this.name} была настроена на ${level}.`);
    }
}

class Computer extends Appliance {
    constructor(name, power, isLaptop) {
        super(name, power);
        this.isLaptop = isLaptop;
    }

    checkIsLaptop() {
        console.log(`${this.name} это ноутбук: ${this.isLaptop}.`);
    }
}

// Создание экземпляров устройств
const myLamp = new Lamp("Настольная лампа", 20, 50);
const myComputer = new Computer("MacBook Pro", 150, true);

// Add appliances to an array
const appliances = [myLamp, myComputer];

// Включим некоторые приборы и расчитаем потребляемую мощность
let totalPower = 0;
for (let i = 0; i < appliances.length; i++) {
    if (i % 2 === 0) {
        appliances[i].turnOn();
        totalPower += appliances[i].power;
    }
}
console.log(`Общая потребляемая мощность: ${totalPower} watts.`);
