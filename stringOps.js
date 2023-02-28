//There are different types of methods I can use with strings

//length allows me to know how many characters string have
var chill = "Ales"
var colin = "sergei"

function stud() {
    console.log(chill.length)
    console.log(colin.length)
}
stud()

//charAt can be used to reach specific characters starting from index 0
//var cheese = 'parmesan'
function mij (cheese) {
    console.log(cheese.charAt(3))
}
mij('parmesan')

//concat to merge strings
const arr1 = [1, 2, [3, 4]];
const arr2 = [[5, 6], 7, 8];
const arr3 = arr1.concat(arr2);
console.log(arr3)

//indexOf returns the location of the position that matches a character
var yes = "My star is far";
var no = yes.indexOf('r');
console.log(no)

//lastindexof finds the last match of the character
var yes = "My star is far";
var no = yes.lastIndexOf('r');
console.log(no)

//touppercase and tolowercase
var stay = "Sheesh";
var cut = 'ZAZ'
var stj = stay.toUpperCase()
var sth = cut.toLowerCase();
console.log(stj, sth);

// exercise creating arrays objects
var clothes = [];
clothes.push('T-Shirts', 'Jeans', 'Shirts', 'Jackets', 'Suits');
clothes.pop('Suits')
clothes.push('Pants')
console.log(clothes[2])

var favCar = {};
favCar.color = 'Black';
favCar.convertible = true;
console.log(favCar);

// typoOf

var test = typeof('false');
var test = typeof('12');
var test = typeof(1 > 2);
var test = typeof([1, 2, 3]);
var test = typeof(function add () {console.log(1 + 2)});
var test = typeof(true);
console.log(test)