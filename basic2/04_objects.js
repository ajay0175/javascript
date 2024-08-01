// const appUser = new Object();   Singleton Object

const appUser = {
    id:"1234abc",
    name: "Ajay",
    isLogged:"false"
};



let appUser2 = {
  name: "aajay",
};

// appUser = appUser2;

/*  
    The value of a constant can't be changed through reassignment using the assignment operator, 
    but if a constant is an object, its properties can be added, updated, or removed. 
*/

/*
    Because => Objects are stored in memory as references.
    The variable holds a reference (like a pointer) to the location in memory where the object's data is stored.
*/

// console.log(appUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "AJay",
      lastname: "Nishad",
    },
  },
};

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

// const obj3 = { obj1, obj2 };
// const obj3 = Object.assign({}, obj1, obj2);

const obj3 = { ...obj1, ...obj2 }; // spread Operator

// console.log(obj3);

const users = [
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 1,
    email: "h@gmail.com",
  },
];

users[1].email;
// console.log(appUser)

// console.log(Object.keys(appUser));
// console.log(Object.values(appUser));
// console.log(Object.entries(appUser));

// console.log(appUser.hasOwnProperty("isLogged"));

const course = {
    coursename: "js",
    price: 999,
    courseInstructor: "ajay"
}

const {courseInstructor: name} = course;

console.log(name);

process.stdout.write(name); // workes in nodejs only
