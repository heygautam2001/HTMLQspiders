let promise1 = new Promise((resolve , reject)=>{
  let error = false
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

// Promise.all([promise1 , promise2 , promise3])
// .then((result)=>{
//    console.log(result);
// }).catch((error)=>{
// console.log(error);
// }).finally(()=>{
//   console.log("Promises are either consumed and rejected ");
// })

// Promise.any([promise1 , promise2 , promise3])
// .then((result)=>{
//   console.log(result);
// }).catch((err)=>{
//   console.log(err);
// }).finally(()=>{
//   console.log("Request are either Resolve or rejected");
// })


Promise.race([promise1 , promise2 , promise3])
.then((result)=>{
  console.log(result);
}).catch((err)=>{
 console.log(err);
}).finally(()=>{
  console.log("Promise are either resolved or rejected");
})

Promise.allSettled().then.catch()







