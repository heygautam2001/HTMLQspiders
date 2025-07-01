
//These techniqiues convert the String input into number.
var n = Number(prompt("Enter a Number : "));
var n = prompt(" Enter a number ")*1;
var n = +prompt(" Enter a number "); 

console.log(n);
console.log(n-10);
console.log(n+220);

// ! ============== Document ====================== 
// It will represent the whole html document.
console.log(window.document);
console.log(document); 


// ! =========== Screen ======================
console.log(screen);
console.log(screen.height);
console.log(screen.availHeight);
console.log(screen.width);
console.log(screen.availWidth);
console.log(screen.orientation);
console.log(screen.orientation.type);


// ! ============== History =========================

console.log(history);

// ? Properties:
//length

// ? Methods:
// forward
// backward
// go(-ve / +ve)

// ? Properties : 
// ! ============== navigator ============
// It will provide the information about the browser
console.log(navigator);

// ! ============= Location ==================

// ? Properties:
console.log(location);
console.log(location.pathname);
console.log(location.protocol);
console.log(location.href);
console.log(location.port);
console.log(location.host);
console.log(location.hostname);
console.log(location.origin);

// ? console object 

let ar = [10, 20 , 30 , 40 , 30];
console.log(ar);
console.dir(ar);

console.table([
  "yash feeling good",
  "Gautam feeling awesome",
  "Chavvi sardar ki bandi",
  "swati sparsh ki bndi"

]);

console.table([
  ["yash feeling good" , "Java Developer"],
  ["Gautam feeling awesome" , "Python Developer" ],
  ["Chavvi sardar ki bandi" , "UI/UX designer"],
  [ "swati sparsh ki bndi" , "Kuch nhi ke pati"]

]);

console.log({
  sname: "dhwani",
  friend : "Priyanshi",
  issue : "Professor"
});

console.table({
  sname: "dhwani",
  friend : "Priyanshi",
  issue : "Professor"
});


