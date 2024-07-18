const marvel_heros = ["thor", "Ironman", "Hulk", "Spiderman"];
const dc_heros = ["Superman", "flash", "batman"];

// marvel_heros.push(dc_heros);
// const allHeros = marvel_heros.concat(dc_heros);

// console.log(allHeros);

// const all_new_Heros = [...marvel_heros, ...dc_heros];
// console.log(all_new_Heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11]]];
const real_another_array = another_array.flat(Infinity);

console.log(real_another_array);