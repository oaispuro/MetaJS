/*console.log(Math.PI)
console.log(Math.E)
console.log(Math.LN2)
console.log(Math.ceil(2.45));
console.log(Math.floor(2.87));
console.log(Math.round(2.45));
console.log(Math.trunc(2.55));
console.log(Math.pow(2,5));
console.log(Math.sqrt(144));
console.log(Math.cbrt(8));
console.log(Math.abs(-19));
console.log(Math.log(10));
console.log(Math.min(9,19,2));
console.log(Math.max(20,50,70));
console.log(Math.sin(12));
console.log(Math.cos(12));
console.log(Math.tan(12));*/

function ramsesGuy(fact) {
   for(var i = fact - 1; i >= 1; i--){
    var d = fact *= i;
   }
   if (fact === 0 || fact === 1){
    console.log("Please enter a number higher than 1")
   } else{
    console.log("The result is", d)
   }
}
ramsesGuy(5)
/*
function disc (price, red) {
    var n = 100 - red;
    var y = n * price;
    var j = y / 100;
    console.log(j);
}
disc(3800, 10)

function ales (price, cant) {
    var k = cant * 100;
    var t = k / price;
    console.log(t);
}
ales(49000, 19000)
*/
function yearsSince (date) {
    let d = new Date();
    a = d.getFullYear() - date;
    if (date > 2022){
        console.log("Please enter a year before 2022")
    } else {
        console.log("It's been", a, "years since", date)
    }
}
yearsSince(2016)

const factorial = function fac(n) {
    return n < 2 ? 1 : n * fac(n - 1);
  }
  
  console.log(factorial(2))
  