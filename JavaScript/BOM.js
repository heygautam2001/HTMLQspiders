// ! ================= BOM =================

/**
 * In javaScript BOM stands about for Browser Object Model.
 * - Its a collection of object that allows javaScript to interact with the browser
 * Everything in JavaScript is an object..
 * 
 * BOM represented by a keyword "window"
 * 
 */


// ? ======== window properties ================
console.log(window); // it points the whole browser
console.log(window.document);
console.log(window.screen);
console.log(window.history);
console.log(window.navigator);
console.log(window.location);
console.log(window.innerHeight);
console.log(window.outerHeight);
console.log(window.innerWidth);
console.log(window.outerWidth);


// ? =========== window method ================= 

console.log(window.prompt("Enter your name"));
console.log(window.alert("Emergency danger"));
window.confirm("Once after sunmission you cannikt edit code");
window.open("https://www.meesho.com");
window.open("https://www.meesho.com");
window.open("https://www.meesho.com");

window.close();

// ~ ==================== web browser Api ===================================================

console.log("I am first");

setTimeout(()=>{
  console.log("I will display after 0s");
},0)

// syntax : setTimeout(callbackFn , time)

let timer3s = setTimeout(()=>{
  console.log("I will display after 3s");
},3000)

setTimeout(()=>{
  console.log("I will display after 1s");
},1000)

// sytax : clearTimeout(setTimeoutName)

setTimeout(()=>{
  console.log("I am clearing ");
  clearTimeout(timer3s)
},1500)


let count = 1;
setInterval(()=>{
  console.log("I am interval 2sec" , count++);
},2000)

var intervals = setInterval(()=>{
  console.log("I am intervals 1s");
},1000)

// synatx : clearInterval(setIntervalName)

setTimeout(()=>{
clearInterval(intervals)
},5000)






