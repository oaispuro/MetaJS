//forEach method executes function for each array element
const fruits = ['kiwi','mango','apple','pear'];
function appendIndex(fruit, index) {
    console.log(`${index}. ${fruit}`)
}
fruits.forEach(appendIndex);

//sometimes the foreach method needs to use is passed in directly into the method call
const veggies = ['onion', 'garlic', 'potato'];
veggies.forEach( function(veggies, index) {
    console.log(`${index}. ${veggies}`)
})

var nms = ['sun', 'stay', 'compare', 'create', 'hire']
nms.forEach( function(nms){
    if(nms.length > 3){
        console.log(nms)
    }
})

//filter method filters array based on specified test
const nums= [0,10,20,30,40,50];
var result = nums.filter(function(num){
    return num > 20
})
console.log(result)

//The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
var mpp = [2,4,6,8,10]
var mp1 = mpp.map(x => x * 2)
console.log(mp1)

//example using data structures
const reslt = [];
const drone = {
    speed: 100,
    color: 'yellow'
}
const droneKeys = Object.keys(drone);
droneKeys.forEach( function(key) {
    reslt.push(key, drone[key])
})
console.log(reslt)

//get
let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers);
console.log(bestBoxers.get(1))

//set
const repetitiveFruits = ['apple','pear','apple','pear','plum', 'apple'];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits);

//rest and spread ... operator
var birds = ['eagle', 'phoenix', 'falcon'];
var office = ['globe', 'frame', 'saber'];
var joint = [...office, ...birds];
console.log(joint)

var car = {
    wheels : 4,
    doors : 2
}
var comp1 = {
    ram : 256,
    speakers: 'mono'
}
var both = {...car,...comp1}
console.log(both)

//spread word into array
var ok = 'okay';
var see = [...ok]
console.log(see)

//copy objects or arrays
const car1 = {
    speed: 200,
    color: 'yellow'
}
const car2 = {...car1}
car1.speed = 201
console.log(car1.speed, car2.speed)

const meal = ["soup", "steak", "ice cream"]
let [starter] = meal;
console.log(starter);

let obj = {
    key: 1,
    value: 4
};

let output = { ...obj };
output.value -= obj.key;

console.log(output.value);

