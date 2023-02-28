// for
/*for(var i = 0; i <= 10; i++){
    console.log(i)
}

for(var i = 10; i >= 0; i--){
    console.log(i)
}
console.log("Heck yeah")
 
//while
var counter = 5;
while(counter > 0){
    console.log(counter);
    counter = counter - 1;
}
console.log("Happy New Year!")

//excercises
for(var i = 1; i <= 5; i++){
    console.log(i)
}
console.log('Counting completed!')

for(var i = 5; i >= 1; i--){
    console.log(i)
}
console.log('Countdown finished!')

var track = 1;
while(track <= 5){
    console.log(track)
    track = track + 1;
}
console.log('Counting completed!')

var cnt = 5;
while(cnt >= 1){
    console.log(cnt)
    cnt = cnt - 1;
}
console.log('Countdown finished!')

var year = 2018;
while(year <= 2022){
    console.log(year)
    year = year + 1;
}

for(i = 0; i < 2; i++){
    for(j = 0; j < 10; j++){
        console.log(i, "times", j, "equals", i * j)
    }
}

for (var i = 100; i > 10; i = i - 10) {
    for (var j = 10; j > 4; j = j - 5) {
        console.log(i + " divided by " + j + " equals " + i / j);
    }
}

var cubes = "ABCDEFGH"

for (var i = 0; i < cubes.length; i++) {
    console.log(cubes[i])
}

//exercise 1
for (var i = 1; i <= 10; i++) {
    if (i == 1) {
        console.log('Gold Medal');
    } else if (i == 2){
        console.log('Silver Medal');
    } else if (i == 3){
        console.log('Bronze Medal');
    } else {
        console.log(i)
    }
}*/

for (var i = 1; i <= 10; i++){
    switch(i){
        case 1:
            console.log('Gold Medal')
            break;
        case 2:
            console.log('Silver Medal')
            break;
        case 3:
            console.log('Bronze Medal')
            break;
        default:
            console.log(i)
            break;
    }
}