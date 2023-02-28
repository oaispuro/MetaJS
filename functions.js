//functions are used to run a set of actions when needed
/*var a = 10
var b = 20
var c = a + b
function addTwo () {
    console.log(c)
}

addTwo();


function addBet(a, b){
    console.log(a + b)
}
addBet(23, 24);


function listArrayItems(arr) {
    for(var i = 0; i < arr.length; i++){
        if(arr[i] == 'blue') {
            console.log(i+1, "Tavo's favorite color")
        } else if(arr[i] == 'pink') {
            console.log(i+1, "Ales' favorite color")
        } else {
            console.log(i+1, arr[i])
        }
    }
}

var colors = ['red', 'orange', 'pink', 'blue', 'black']
listArrayItems(colors);

*/
function letterFinder(word, match) {
    for(var i = 0; i < word.length; i++) {
        if(word[i] == match) {
            console.log('Found the', match, 'at', i)
        } else {
            console.log('---No match found at', i)
        }
    }
}
letterFinder('octavio', 'a');
/*
Comma delimitted objects
var assistantManager = {
    rangeTilesPerTurn: 3,
    socialSkills: 30,
    streetSmarts: 30,
    health: 40,
    specialAbility: "young and ambitious",
    greeting: "Let's make some money"
}

Dot notation
var house2 = {};
house2.rooms = 4;
house2.color = "pink";
house2.priceUSD = 12345;

Bracket notation
var house2 = {};
house2["rooms"] = 4;
house2['color']= "pink";
house2["priceUSD"] = 12345;
console.log(house2); // {rooms: 4, color: 'pink', priceUSD: 12345}

var arrOfKeys = ['speed', 'altitude', 'color'];
var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
}
for (var i = 0; i < arrOfKeys.length; i++) {
    console.log(drone[arrOfKeys[i]])
*/
var coolBands = [];
coolBands.push('Arctic Monekys');
coolBands.push('Metallica');
coolBands.push('Iron Maiden');
console.log(coolBands)
coolBands.pop('Metallica');
console.log(coolBands)

var workout = {};
workout.day = 'Monday';
workout.start = function () {
    console.log("You're working out")
};
workout.end = function () {
    console.log("You're done working out")
}

console.log(workout);
workout.start ();
workout.end ();