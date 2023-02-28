/* There are 4 types of errors
- SyntaxError
- ReferenceError
- TypeError
- RangeError

ReferenceError is thrown when for example I try to use a variable
that doesn't exist

console.log(username) here username is not defined

SyntaxError is caused when coding errors occur for example
not closing quotation marks or not closing parenthesis

if (1 > 2 {
    console.log(yes)
}
Here the parenthesis wasn't closed so it is an error

TypeError happens when for example I try to run a method
on a non supported data type.

"Hello".pop
This is an error because strings do not have all the array 
methods readily available to them, and trying to use some of 
those methods will result in a TypeError being thrown.

RangeError is thrown when we're giving a value to a function, 
but that value is out of the allowed range of acceptable input 
values.*/
/*
let rat = /[aeiou]/gi;
let ram = /[^aeiou]/gi;
let not = /[0-9]/g;
function steve(text){
    console.log('There are',text.match(rat).length,'vowels in the sentence.')
    console.log('There are',text.match(ram).length,'consonants in the sentence.')
}

steve('amo a la Ales')

//exercise error prevention
function addTwoNums(a, b){
    try{
        if (typeof a != 'number'){
            throw new ReferenceError('the first argument is not a number');
        } else if (typeof b != 'number'){
            throw new ReferenceError('the second argument is not a number');
        } else {
            console.log(a + b)
        }
    } catch (err) {
        console.log("Error!", err)
    }
}
addTwoNums(5,"5")
console.log("It still works.")
*/
//exercise defensive programming
function letterFinder(word, match) {
    let condition1 = typeof(word) == 'string' && word.length >= 2;
    let condition2 = typeof(match) == 'string' && match.length == 1;
    if (condition1 && condition2){
        for(i = 0; i < word.length; i++){
            if(word[i] == match) {
                console.log('Found the', match, 'at', i)
            } else {
                console.log('---No match found at', i)
            }
        }
    } else { 
        console.log("Please pass correct arguments to the function")
    }
}
letterFinder(2, 2)

const person = "Mike";
const age = 28;

function myTag(strings, personExp, ageExp) {
  const str0 = strings[0]; // "That "
  const str1 = strings[1]; // " is a "
  const str2 = strings[2]; // "."

  const ageStr = ageExp > 99 ? "centenarian" : "youngster";

  // We can even return a string built using a template literal
  return `${str0}${personExp}${str1}${ageStr}${str2}`;
}

const output = myTag`That ${person} is a ${age}.`;

console.log(output);
// That Mike is a youngster.
