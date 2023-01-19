// Родительский класс устройства
function Appliance(name, power) {
    this.name = name;
    this.power = power;
    this.isOn = false;
}

Appliance.prototype.turnOn = function() {
    this.isOn = true;
    console.log(`${this.name} - включено.`);
};

Appliance.prototype.turnOff = function() {
    this.isOn = false;
    console.log(`${this.name} - выключено.`);
};

// Дочерний класс Lamp
function Lamp(name, power, brightness) {
    Appliance.call(this, name, power);
    this.brightness = brightness;
}

Lamp.prototype = Object.create(Appliance.prototype);
Lamp.prototype.constructor = Lamp;

Lamp.prototype.adjustBrightness = function(level) {
    this.brightness = level;
    console.log(`Яркость ${this.name} была настроена на ${level}.`);
};

// Дочерний класс Computer
function Computer(name, power, isLaptop) {
    Appliance.call(this, name, power);
    this.isLaptop = isLaptop;
}

Computer.prototype = Object.create(Appliance.prototype);
Computer.prototype.constructor = Computer;

Computer.prototype.checkIsLaptop = function() {
    console.log(`${this.name} это ноутбук: ${this.isLaptop}.`);
};

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
console.log(`Общая потребляемая мощность: ${totalPower} Ватт.`);