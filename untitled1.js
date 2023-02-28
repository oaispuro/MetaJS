//this is a single line comment 
/*this
is 
a
multi line
comment*/
/*but it can be used as a single line too */
console.log("%cHello, World", "color: blue; font-size: 40px");
// by adding some css adding %c at the beginning of the string I was able to style the words in console in chrome.
console.log("Hello, " + "my love. " + "I missed you");
console.log("Hello,", "my love.", "I missed you")
/* variables can be assigned using var
they can also be changed if they are reassigned using
the same variable and redfining them */
var petDog = "Rex";
var petCat = "Pepper";
console.log(petDog)
console.log(petCat)
console.log("My pet dog's name is:", petDog);
console.log("My pet cat's name is:", petCat);
var catSound = "purr";
var dogSound = "woof";
console.log(petDog, "says", dogSound);
console.log(petCat, "says", catSound);
catSound = "meow"
dogSound = "guau"
console.log(petDog, "now says", dogSound);
console.log(petCat, "now says", catSound);
var groom = "Tavo";
var bride = "Ales";
var wed = "are getting married";
var date = "on Dec 29th 2022.";
console.log(groom, "&", bride, wed, date);
/*DATA TYPES
STRING have to be in single or double quotes 'Hello' "hello"
NUMBER 123
BOOLEAN True or False
NULL Absence of a value
Undefined Unassigned value
BigInt Very large range of numbers
SYMBOL Unique identifier (different serial number for similar objects)*/
