var num = 10;
var dec = 10.3;
var bool  = true;
var str = "string";
var object = {};

console.log(num , dec ,bool , str);
console.log(typeof num , typeof dec , typeof bool ,typeof str, typeof object);


// objects

var x = {};
var y = {"name": "Ajaykumar"};
var z = {name: "Ajaykumar", name2 : "Ajay"};
x.name = "Ajaykumar";

console.log(x, y, z);

///////

console.log(1+"2");  // acting has a String 
console.log(1-"2");  // acting has a integer
console.log(1- "Ajaykumar"); // NaN => Not a number
