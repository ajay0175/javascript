function tipper(a) {
    var bill = parseInt(a);
    console.log(bill + 5);
}

tipper("5");
tipper("a");

// bigTipper("200");

var bigTipper =  function(a) {
    var bill = parseInt(a);
    console.log(bill + 15);
}

bigTipper("200");

// var name = "Ajay";
console.log(name);

var name = "Ajay";

function sayName(){
    var name = "Akn";
    console.log(name);
}

sayName();
console.log(name);