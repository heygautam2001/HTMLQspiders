const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros];

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
// console.log(another_array);
const real_another_array = another_array.flat(Infinity);
// console.log(real_another_array);

// console.log(Array.isArray("Hitesh"))
// console.log(Array.from("Hitesh"));
// console.log(Array.from({ name: "hitesh" })); // interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;
// console.log(Array.of("hitesh" ,"Gautam" , "Roshan"));
// console.log(Array.of(score1, score2, score3));

let arr = Array.from("Gautam");
// console.log(arr);

let myarr = Array.from({ name: "Gautam", age: 21 });
// console.log(myarr); // []
// console.log(myarr.length); // 0



// 1. find() Method
// The find() method:
// Returns the first element in an array that satisfies a condition
// Stops searching once a match is found
// Returns undefined if no element matches

let myNewArr = [12, 13, 17, 15, 19, 17, 18, 18, 17, 20];
let found = myNewArr.find((ele) => {
  return ele > 17;
});
// console.log(found);

// 2. findIndex() Method
// The findIndex() method:
// Returns the index of the first element that satisfies a condition
// Returns -1 if no element matches

let fIndex = myNewArr.findIndex((ele) => {
  return ele >= 19;
});
// console.log(fIndex);
