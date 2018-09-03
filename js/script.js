'use scrict';

// Function of consctuction
function Phone(brand, price, color, screen) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.screen = screen;
}

function Memory(internal, memory, processor) {
	this.internal = internal;
	this.memory = memory;
	this.processor = processor;
}

// Methods fo function
Phone.prototype.printInfo = function () {
	console.log('The phone brand is ' + this.brand + ', color is ' + this.color + ', and the price is ' + this.price + ', screen type is ' + this.screen + '.<br>');
	document.write('The phone brand is ' + this.brand + ', color is ' + this.color + ', and the price is ' + this.price + ', screen type is ' + this.screen + '.<br>');
}
Memory.prototype.printMemory = function () {
	console.log('Biuld memory is ' + this.internal + ', external memory is ' + this.memory + ', processor is ' + this.processor + '.<br>');
	document.write('Biuld memory is <b>' + this.internal + '</b>, external memory is <b>' + this.memory + '</b>, processor is <b>' + this.processor + '</b>.<br><br>');
}

// Objects based on a class and starting methods
var iPhone6S = new Phone('Apple', 2250, 'silver', 'IPS TFT');
var iPhone6SMemory = new Memory('16 GB', '2 GB', 'Apple A9 - 1,50 GHz');
iPhone6S.printInfo();
iPhone6SMemory.printMemory();

var samsungGalaxyS6 = new Phone('Samsung Galaxy S6', 1899, 'blue', 'Super AMOLED');
var samsungGalaxyS6Memory = new Memory('32 GB', '3 GB', 'Samsung Exynos 7420 - 2,10 GHz');
samsungGalaxyS6.printInfo();
samsungGalaxyS6Memory.printMemory();

var onePlusOne = new Phone('Oneplus One', 1399, 'grey', 'IPS TFT');
var onePlusOneMemory = new Memory('16 GB', '3 GB', 'Qualcomm Snapdragon 801 8974AC - 2,50 GHz');
onePlusOne.printInfo();
onePlusOneMemory.printMemory();