// Immediately Invoked function Expression (IIFE)

(function jsWorld() { // named iife
  console.log("start the world");
})(); // semi-colon is mandatory,
      //  because IIFE don't know where to end the program.

/*
    syntax => (function)();

    To avoid the global scope, variable or function pollution we used IIFE

*/

((name) => { //  unname iife
  console.log(`arrow function by ${name}`);
})("Ajay");
