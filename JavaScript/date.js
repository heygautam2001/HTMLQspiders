let date = new Date();
// console.log(date);
// console.log(date.toLocaleString());
// console.log(date.toLocaleTimeString());
// console.log(date.toLocaleDateString());

// ! ============================================================ !

//  console.log(date.getFullYear());
//  console.log(date.getMonth());
//  console.log(date.getDay());
//  console.log(date.getHours());
//  console.log(date.getMinutes());
//  console.log(date.getSeconds());
//  console.log(date.getMilliseconds());

 // ! ============================================================ !

// console.log(date.getTimezoneOffset());
// console.log(date.getUTCDate())
// console.log(date.getUTCDay())
// console.log(date.getUTCFullYear());
// console.log(date.getUTCMonth());
// console.log();

// ! ============================================================= !

let date1 = new Date();

date1.setFullYear(2026 , 0 , 23 );
// console.log(date1.toLocaleDateString());

date1.setDate(30);
date1.setMonth(8);

// console.log(date1.toLocaleDateString());

date1.setFullYear(2001 , 8 , 30);
// console.log(date1.toLocaleDateString());
// console.log(date1.toLocaleTimeString());
// console.log(date1.toLocaleString());


// ^ ========================================================= ^
// ! create your own date....

let date2 = new Date(2001,8,30,11,30,53,10);
console.log(date2.toLocaleString());
console.log(typeof date2);

// ^ ===========================================================^

let date3 = new Date();
 console.log(date3.toLocaleTimeString());

console.log(Date.now());

console.log(date3.getTime());
