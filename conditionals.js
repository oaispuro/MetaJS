/*There are three types of conditionals
if statements which are for simple true or false
if else when there are more than one conditions
switch when there are multiple conditions too

var ac = 'off';
if(ac == 'on'){
    console.log('Keep door closed')
} else {
    console.log('Door can be open');
}*/

// if statement to check where you're on a serie
var chapter = 1;
if(chapter > 0 && chapter <= 10){
    console.log("You're on season 1")
} else if(chapter >= 11 && chapter <= 20){
    console.log("You're on season 2")
} else if(chapter > 21 && chapter <= 30){
    console.log("You're on season 3")
} else{
    console.log("You finished the serie")
}
/*
//using switch
var light = 'no light';
switch(light){
    case'green':
        console.log("You can drive")
        break;
    case'yellow':
        console.log("Slow down")
        break;
    case'red':
        console.log("Stop")
        break;
    default:
        console.log("Keep driving")
        break;
}

var age = 25;
if(age >= 65){
    console.log("You get your income from your pension.")
} else if(age < 65 && age >= 18){
    console.log("Each month you get a salary.")
} else if(age < 18){
    console.log("You get an allowence.")
} else{
    console.log("The value is not numerical")
}

var day = "Monday";
switch(day){
    case"Monday":
        console.log('Work')
        break;
    case"Tuesday":
        console.log('Study')
        break;
    case"Wednesday":
        console.log('Gym')
        break;
    case"Thursday":
        console.log('Movies')
        break;
    case"Friday":
        console.log('Swim')
        break;
    case"Saturday":
        console.log('Rest')
        break;
    case"Sunday":
        console.log('Church')
        break;
    default:
        console.log('There is no such day')
        break;
}
*/