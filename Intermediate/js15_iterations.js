// for in Loop

const myObject = {
  js: "javascript",
  cpp: "C++",
  rb: "ruby",
  swift: "swift by apple",
};

for (const key in myObject) {
  // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"];

for (const key in programming) {
  // console.log(programming[key]);
}

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");
map.set("IN", "India");

//map are not Iteratable in for-in loop
for (const key in map) {
  // console.log(key);
}

// forEach Loop

const coding = ["js", "ruby", "java", "python", "cpp"];

// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];

// myCoding.forEach( (item) => {

//     console.log(item.languageName);
// } )

/******************************** Filter, Map and reduce *****************************/

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter((num) => {
//   return num > 4;
// });

// console.log(newNums);

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

let userBooks = books.filter((bk) => bk.genre === "History");

userBooks = books.filter((bk) => {
  return bk.publish > 1995 && bk.genre === "Science";
});

// console.log(userBooks);

//map
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const myNum = myNumbers.map((num) => num + 10);

const Newnums = myNumbers /// map chaining
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 40);

// console.log(Newnums);

//Reduce
// syntax => reduce(callbackFn, initialValue)

const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function(acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval;
// }, 0);

const myTotal = myNums.reduce((acc, currval) => (acc + currval), 0)

// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item["price"], 0)

console.log(`Bill to pay: ${priceToPay}`);
