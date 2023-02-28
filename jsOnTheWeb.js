//apending an element from user prompt
let answer = prompt('What is your name?');
if (typeof(answer) === 'string') {
    var h1 = document.createElement('h1')
    h1.innerText = answer;
    document.body.innerText = '';
    document.body.appendChild(h1);
}

//script which will take an input from an HTML form and display the text that a user types in on the screen
var h1 = document.createElement('h1')
h1.innerText = "Type into the input to make this text change"

var input = document.createElement('input')
input.setAttribute('type', 'text')

document.body.innerText = '';
document.body.appendChild(h1);
document.body.appendChild(input);

//added event listener to replace created h1 element with user input
var h1 = document.createElement('h1')
h1.innerText = "Type into the input to make this text change"

var input = document.createElement('input')
input.setAttribute('type', 'text')

document.body.innerText = '';
document.body.appendChild(h1);
document.body.appendChild(input);

input.addEventListener('change', function() {
    h1.innerText = input.value
})
//capture data
var h1 = document.querySelector('h1')

var arr = [
    'Example Domain',
    'First Click',
    'Second Click',
    'Third Click'
]

function handleClicks (){
    switch(h1.innerText){
        case arr[0]:
            h1.innerText = arr[1]
            break;
        case arr[1]:
            h1.innerText = arr[2]
            break;
        case arr[2]:
            h1.innerText = arr[3]
            break;
        default:
            h1.innerText = arr[0]
                       }
}
h1.addEventListener('click',handleClicks())

//convertin a JSON string to JS object
'{"greeting" : "hello"}'
//assign the JSON formatted string to a variable
const jsonStr = '{"greeting" : "hello"}'
//parse the variable created 
JSON.parse(jsonStr);
//assign to variable 
const aPlainObj = JSON.parse(jsonStr);
//after creating the object, the values can be modified 
aPlainObj.greeting = "hi"