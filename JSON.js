









// ? case 1 : Arrays
/*
var data = ["shivam" , "Aman" , "Abhishek" , "Ketan" , "Dhwani"]
console.log(data);
var stringify = JSON.stringify(data)
console.log(stringify);
var odata = JSON.parse(stringify);
console.log(odata);
*/
// ? case : 2 : Objects
/*
var data = {
  sname : "Dhwani",
  course : "Java Full Statck",
  girlfriend : "Priyanshi",
  bestfriend : "ankittt"
}
*/
// ? case 3 : Arrays of Arrays

var data = [
  ["Harsh" , "Dev" , "none"],
  ["Govind" ,"priyanshi" , "Priyanshi" , "Priyanshi"],
  ["Shivam" , "Srishti" , "Pragya" , "Bubby"],
]

// ? Case 4 : Objects of objects

console.log("Case 4");
var data = {
  dhwani : {sname : "Dhwani" , age: 16 , course : "Java Full Stack"},
  srishti : {sname : "srishti" , age: 21 , course : "Python Full Stack"},
  priyanshi : {sname : "priyanshi" , age: 21 , course : "Java Full Stack"},
  Ankit : {sname : "Ankit" , age: 20 , course : "Mern stack"},
  
};

// console.log(data);
// console.log(JSON.stringify(data));
// console.log(JSON.parse(data));

// ? Case 5 : Object of Arrays
var data = {
  harsh : ["Harsh" , "Dev" , "None"],
  govind : ["Govind" , "Gautam" , "Yash" , "Ankit"],
  dhwani:["Ankit" , "Priyanshi" , "Priyanshi" , "Priyanshi" ],
  shivam:["shivam" , "srishti" , "parya" , "bobby" ],

}

// ? Case 6 : Arrays of Object and multilevel 
var data = [
  {
    sname:"Dhawani", 
    age : 16,
    course: "Java Full Stack",
    skills:{
      frontend:[
        {basic : ["html" , "css"],advanced:["Js"]},
        {
          basic:["html" , "css" , "Js"],
          advanced:["React js" , "MUI" , "TypeScript"]
        },
      ],
      database:[],
      backend:[],
    },
  },
  {},
  {},
  {},
];
// console.log(data);
// console.log(typeof data);

var json_data = JSON.stringify(data);
// console.log(json_data);

var js_data = JSON.parse(json_data)
// console.log(js_data);
// console.log(typeof js_data);

// ! =========Looping===========
for (const i of js_data) {
  console.log(i);
} 