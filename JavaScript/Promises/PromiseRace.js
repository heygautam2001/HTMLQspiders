let promise1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      console.log("Executing the Promise ! 2000");
      resolve("Promise is resolved")
    },2000)
})

let promise2 = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    console.log("Executing the Promise 1000 !");
    resolve("Promise is resolved")
  },1000)
})

let promise3 = new Promise((resolve, reject)=>{
  let error = true;
  if(!error){
  setTimeout(()=>{
    console.log("Executing the Promise 500 !");
    resolve("Promise is resolved")
  },500)
}
reject("Promise is rejected")
})

Promise.race([promise1,promise2,promise3])
.then((result)=>{
  console.log(result);
}).catch((error)=>{
  console.log(error);
})
