// singleton 
//    object.create 

//object literals

const mySym = Symbol("key");

const jsUser = {
    name: "Ajay",
    "full name": "Ajay Nishad",
    age: 1,
    [mySym]: "key1", // if mySym is used without []  then it act as a string instead of symbol
    location: "Mumbai",
    email: "my@mail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "wednesday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]); 
// console.log(jsUser[mySym]); // symbol can be access in object by this syntex only 

jsUser.email = "ajay@google.com";
// console.log(jsUser["email"]);


// Object.freeze(jsUser);

jsUser.email = "ajaykn@google.com";
// console.log(jsUser);

jsUser.greeting = function() {
    console.log("Hello Js User");
}

console.log(jsUser.greeting());

