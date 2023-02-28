const bicycle = {
    bell: function() {
        return "Ring, ring! Watch out, please!"
    }
}
const door = {
    bell: function() {
        return "Ring, ring! Come here, please!"
    }
}

console.log(bicycle.bell())
console.log(door.bell())

function ringTheBell(thing) {
    console.log(thing.bell())
}

ringTheBell(bicycle)
ringTheBell(door)

class Bird {
    useWings() {
        console.log("Flying!")
    }
}
class Eagle extends Bird {
    useWings() {
        super.useWings()
        console.log("Barely flapping!")
    }
}
class Penguin extends Bird {
    useWings() {
        console.log("Diving!")
    }
}
var baldEagle = new Eagle();
var kingPenguin = new Penguin();
baldEagle.useWings(); // "Flying! Barely flapping!"
kingPenguin.useWings(); // "Diving!"

class Movies {
    magicMovie(){
        console.log('You should watch Harry Potter')
    }
}
class Action extends Movies {
    magicMovie(){
        super.magicMovie()
        console.log('Die Hard')
    }
}
var tsk = new Action;
tsk.magicMovie()

//constructors
function Icecream(flavor) {
    this.flavor = flavor;
    this.meltIt = function() {
        console.log(`The ${this.flavor} icecream has melted`);
    }
}

let kiwiIcecream = new Icecream("kiwi");
let appleIcecream = new Icecream("apple");
console.log(kiwiIcecream.flavor)
appleIcecream.meltIt()

class Train {
    constructor(color, lightsOn){
        this.color = color;
        this.lightsOn = lightsOn;
    }
    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }
    lightsStatus() {
        console.log('Lights on?', this.lightsOn);
    }
    getSelf() {
        console.log(this);
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}
var train1 = new Train('blue',true)
var train2 = new Train('red', false)
train1.toggleLights()
console.log(train1.lightsOn)
train1.toggleLights()
console.log(train1.lightsOn)
train2.getPrototype()

class HighSpeedTrain  extends Train{
    constructor(passengers, highSpeedOn, color, lightsOn){
        super(color, lightsOn);
        this.highSpeedOn = highSpeedOn;
        this.passengers = passengers;
    }
    toggleHighSpeed (){
        this.highSpeedOn = !this.highSpeedOn;
        console.log('HighSpeed Status:', this.highSpeedOn)
    }
    toggleLights(){
        super.toggleLights()
        super.lightsStatus()
        console.log(`${this}Lights are 100% operational`)
    }
}

var highSpeed1 = new HighSpeedTrain(100,true,'green',false)
highSpeed1.toggleLights();
highSpeed1.toggleHighSpeed();
highSpeed1.getSelf();

class StationaryBike {
    constructor(position, gears) {
        this.position = position
        this.gears = gears
    }
}

class Treadmill {
    constructor(position, modes) {
        this.position = position
        this.modes = modes
    }
}

class Gym {
    constructor(openHrs, stationaryBikePos, treadmillPos) {
        this.openHrs = openHrs
        this.stationaryBike = new StationaryBike(stationaryBikePos, 8)
        this.treadmill = new Treadmill(treadmillPos, 5)
    }
}

var boxingGym = new Gym("7-22", "right corner", "left corner")