// this keyword

console.log(this);

var game = "cricket";

var Say_name =  function() {
    var name = "Ajay";
    console.log(this);
}

Say_name();

//In node it output the empty  scope => {}
//In browser it give access to windows object
/*

*/