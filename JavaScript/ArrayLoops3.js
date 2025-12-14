let arr = [12 , 54, 32 , 21, 78 ,  89 ,98 , 67 , 10 , 11 ,13 ];
// console.log(arr);

// let brr = arr.filter((val)=>{
//     return val > 50;

    
// });
// console.log(brr);

// let trr = arr.filter((val , idx)=>{
//   if(idx > 5)
//     return val > 50;
//    else
//     return val < 50;

  
// });
// console.log(trr);

let brr = arr.map((val)=>{
  return val+50;
})

console.log(brr);
console.log(arr);


// let brr = arr.map((val , idx)=>{
//   if(idx > 5)
//     return val+10;
//   else
//   return val+20;
// })

// console.log(arr);
// console.log(brr);

let trr = [1, 2, 3, 4, 5];

let sum  = trr.reduce((sum , val , i , grr)=>{
  console.log(i , sum , val , grr);
  // console.log(sum);
  // console.log(val);
  return sum+val;
} , 4 )

console.log(sum);


