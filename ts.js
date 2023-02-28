// object.keys receives object as parameter and returns an array of strings made of the object's properties keys or names
var obj1 = {
    name: "Juan",
    city: "Asgard",
    power: "Can sing the fast part to Rap God"
}
console.log(obj1);
console.log(Object.keys(obj1));

//Object.values on the other hand returns the values from the object's properties
var obj2 = {
    name: 'not Juan',
    city: 'Dimmsdale',
    power: 'can turn invisible when no one is looking'
}
console.log(obj2);
console.log(Object.values(obj2));
//Object.entries returns an array listing bothe the keys and the values
var obj3 = {
    name: 'Spider-Pig',
    city: 'Somewhere over the rainbow',
    power: 'Does whatever a spider does.'
}
console.log(obj3);
console.log(Object.entries(obj3))

var bookShelf = {
    price: 40,
    name: 'Harry Potter 1',
    author: 'J.K. Rowling',
    genre: 'Fiction'
}

for(key of Object.keys(bookShelf)){
    console.log(key, ':', bookShelf[key])
}

function testBracketsDynamicAccess(){
    var dynamicKey;
    if(Math.random() > 0.5) {
        dynamicKey = "speed";
    } else{
        dynamicKey = "color";
    }

    var drone = {
        speed: 15,
        color: 'orange'
    }
    console.log(drone[dynamicKey])
}
testBracketsDynamicAccess();

//for of loops ex 1
var car = {
    engine: true,
    steering: true,
    speed: 'slow'
}
var sportsCar = Object.create(car);
sportsCar.speed = 'fast';
console.log('The sportsCar object:', sportsCar);

console.log('---- for - in is unreliable ----');
for(prop in sportsCar) {
    console.log(prop);
}
console.log('Iterating over object AND its prototype!')

console.log('---- for - of is reliable ----');
for(prop of Object.keys(sportsCar)) {
    console.log(prop + ':' + sportsCar[prop]);
}
console.log('Iterating over objects own properties only!')

var chores = {
    pending: true
}
var choresGroom = Object.create(chores);
choresGroom.chore1 = 'do dishes';
console.log('choresGroom object:', choresGroom);
for (prop in choresGroom){
    console.log('🚫', prop);
}

for (prop of Object.keys(choresGroom)) {
    console.log('🎯', prop + ':' + choresGroom[prop]);
}