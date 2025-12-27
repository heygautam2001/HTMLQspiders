let promise1 = new Promise((resolve , reject)=>{
  let error = true
  if(!error){
    resolve({userName:"heygautam2001" , email : "gautam@gautam.com"})
  }else{
    reject("Unable to fetch data");
  }

})

let promise2 = new Promise((resolve , reject)=>{
  let error = false;
  if(!error){
    resolve({userName:"govindBouncer" , email : "govind@govind.com"})
  }else{
    reject("Unable to fetch data");
  }
})

let promise3 = new Promise((resolve , reject)=>{
  let error = false;
  if(!error){
    resolve({userName:"AnkitBouncer" , email : "ankit@govind.com"})
  }else{
    reject("Unable to fetch data");
  }
})

// 6. Promise.all()
// Purpose: Runs multiple promises in parallel
// MDN idea: Resolves when all promises resolve, rejects if any fail
// Key points:
// Returns array of results in order
// Fails fast if one promise rejects
// Best for dependent success scenarios

// Promise.all([promise1 , promise2 , promise3])
// .then((result)=>{
//    console.log(result);
// }).catch((error)=>{
// console.log(error);
// }).finally(()=>{
//   console.log("Promises are either consumed and rejected ");
// })


// 9. Promise.any()
// Purpose: Resolves when any promise fulfills
// MDN idea: Ignores rejected promises unless all fail

// Key points:
// Rejects only if all promises reject
// Error type: AggregateError

// Promise.any([promise1 , promise2 , promise3])
// .then((result)=>{
//   console.log(result);
// }).catch((err)=>{
//   console.log(err);
// }).finally(()=>{
//   console.log("Request are either Resolve or rejected");
// })

// 8. Promise.race()
// Purpose: Resolves/rejects as soon as the first promise settles

// Use cases:
// Timeout handling
// First response wins

// Promise.race([promise1 , promise2 , promise3])
// .then((result)=>{
//   console.log(result);
// }).catch((err)=>{
//  console.log(err);
// }).finally(()=>{
//   console.log("Promise are either resolved or rejected");
// })

Promise.allSettled([promise1,promise2,promise3]).then((res)=>{console.log(res);}).catch((error)=>{console.log(error);});

