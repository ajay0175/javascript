// scope chaining

var name = "Ajay";

console.log("line no. 5", name);

function say_name() {
    var name = "akn";
    console.log("line no. 9", name);

    say_name2();

    function say_name2() {
        // var name = "abc"
        console.log("line no. 15", name);
    }
}

say_name();