// TODo : falsy
// undefined
// null
// 0, -0
// ''
// NaN
// false

//truthy values
// "0", 'false', " ", [], {}, function(){}

var user = "2";

if (2 === user) {
  console.log("Condtion is true");
} else {
  console.log("Condtion is false");
}

// console.log(2 + 2);
// console.log(2 + "2");
// console.log((2 > 1) && "Ajay"); /// short circuiting

function A() {
  console.log("called A");
  return false;
}
function B() {
  console.log("called B");
  return true;
}

// console.log(A() && B());

// Logs "called A" to the console due to the call for function A,
// && evaluates to false (function A returns false), then false is logged to the console;
// the AND operator short-circuits here and ignores function B


// Nullish Coalescing Operator(??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);