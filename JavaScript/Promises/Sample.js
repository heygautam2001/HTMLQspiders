function customPromise(){
  return new Promise((resolve,reject)=>{
    //.........
    resolve("Promise is resolved")
  })
}

customPromise().then((result)=>{
console.log(result);
}).catch((err)=>{
console.log(err);
}).finally(()=>{
console.log("Prriomise is either resolved or rejected");
})

