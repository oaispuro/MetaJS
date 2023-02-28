// Task 1 takes variable dairy and logs items in list using for of loop
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']
function logDairy() {
    for (list of dairy) {
        console.log(list)
    }
}
// Task 2 takes object and uses it inside function to console bird's object using for of loop
const animal = {
    canJump: true
};

const bird = Object.create(animal);

bird.canFly = true;
bird.hasFeathers = true;

function birdCan() {
    for (can of Object.keys(bird)) {
        console.log(`${can}: ${bird[can]}`)
    }
}
// Task 3 using previous object now logs all properties and values using for in loop
function animalCan() {
    for (all in bird) {
        console.log(`${all}: ${bird[all]}`)
    }       
}

logDairy()
birdCan()
animalCan()