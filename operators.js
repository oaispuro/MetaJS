/* OPERATORS
Arithmetic operators
    + addition
    - subtraction
    / division
    * multiplication
    ** to the power
    % remainder how many times one number fits into 
      the other and returns the remainder
*/
/* Comparison operators
    3 > 2 greater than
    2 < 3 less than
    5 == 5 equal to
    5 != 6 not equal to
    10 === 10 strictly equal / data and type
    1 !== "1" strictly not equal
*/
console.log(5 + 5);
console.log(7 - 2);
console.log(10 / 2);
console.log(4 * 8);
console.log(5 > 2);
console.log(3 < 9);
console.log(5 == 5);
console.log(7 != 5);
console.log(7 + 8 + 9 + 10);
console.log(2 ** 3);
console.log(9 % 8)

/* Logical operators
    AND && checks for both conditions to be true
    OR || checks for at least one condition to be true
    NOT ! returns false if the condition is true
*/
console.log("Logical operators")
var a = 4
var b = 5
console.log(a < b && b > a);
console.log(a > b || 8 < 6);
console.log(!(a < b));
console.log(100 === "100");
console.log(1 !== "1");

/* addition assignment operator +=
it is used to add a value to a var
it can be used with numbers or strings
per assignment rules it can only be either or */
var overtime = 2;
overtime += 3;
overtime += 1;
overtime += 2;
overtime += 1;
overtime += 2;
console.log(overtime);

var story = "";
story += "Once ";
story += "upon a time ";
story += "there was a ";
story += "little Ales. ";
story += "She was in love ";
story += "with a little tavo";
story += ". The End.";
console.log(story);

// Testing for even numbers 
var num1 = 2;
var num2 = 5;
var test1 =  num1 % 2;
var test2 = num2 % 2;
var result1 = test1 == 0;
var result2 = test2 == 0;
console.log("Is", num1, "an even number?", result1);
console.log("Is", num2, "an even number?", result2);