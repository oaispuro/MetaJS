function example () {
    console.log(1);
    console.log(2);
    console.log(3);
}
example()

let counter = 3;
function yws() {
    console.log(counter);
    counter = counter - 1
    if (counter === 0) return;
    yws();
}
yws()

//functional programming
function getDistance(mph, h){
    return mph * h;
}
var mph = 60;
var h = 2;
var distance = getDistance(mph, h);

console.log(distance)

//object-oriented programming 
var virtualPet = {
    sleepy: true,
    nap: function() {
        this.sleepy = false
    }
}
console.log(virtualPet.sleepy)
virtualPet.nap()
console.log(virtualPet.sleepy)

//examples of functional programming first-class functions 
function addTwoNums(a, b){
    console.log(a + b)
}

function randomNum() {
    return Math.floor((Math.random()* 10) + 1)
}
function specificNum() {return 42};

var useRandom = true;
var getNumber;

if(useRandom){
    getNumber = randomNum
} else {
    getNumber = specificNum
}

addTwoNums(getNumber(), getNumber ())

