
// ! Async and Await
 /**
  * - Async is a keyword , we have use just before a function , to convert the synchronous function into asynchronous function...
  * Everytime an asynchronous function returns a promise..
  * If asynchronous function returns normal data , it will wrap into promise resolver
  * If a regular function returns normal data , it will return as it is.
  * if a regular functioin returns promise data , it will promise.
  */

 // ? case 1
 async function getData() {
  return 'Hello , I am the data';
 }
 console.log(getData());

 // ? case 1.1

 function getData2(){
  return Promise.resolve("hello , I am the data...")
 }
 console.log(getData2);

 // ? case 2
 // function returns normal data -----> it will wrap into a promise ---> promise will be returned.

 async function getData3() {
  return 'javaScript class'
 }
 console.log(getData3());

 // ? case 3
// function returns promise wrap into a promise ---> promise will be returned.

let p = new Promise((resolve, reject)=>{
   resolve("I am from promise")
});

async function getData4() {
  return p;

}

console.log(getData4());

// ! Await
// ? case 1
// storing using async keyword , and consuming using them.

/**
 * 
 */

async function getData5() {
  return 'hello';
}
console.log(getData5());

getData5().then((data)=>{
  console.log("data in getData promise is" , data);
})

// ? case 2

// storing using async keyword and consuming using await keyword.
// await is a keyword , we have to use just before promise.

async function getData6() {
  let data = await ("Hello")
  console.log(data);
}

getData6();

