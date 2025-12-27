// ! Object
// ? case 1:

var obj = {
  firstName: "Rohit",
  lastName: "Kumar",
  email: "rohit@gmail.com",
  gender: "male",
};
// console.log(obj);

// var {a,b,c,d} = obj;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// undefined
// undefined
// undefined
// undefined

var a = obj.a;
var b = obj.b;
var { firstName, lastName, email, gender } = obj;
// console.log(firstName);
// console.log(lastName);
// console.log(email);
// console.log(gender);

console.log();
firstName = obj.firstName;
lastName = obj.lastName;
email = obj.email;
gender = obj.gender;
console.log();

// console.log(firstName);
// console.log(lastName);
// console.log(email);
// console.log(gender);

// ? case 2
// Expliit way

/** 
var obj = 
{
  sname : "Priyanshi",
  course: "JFS",
  skills : {
    frontend:"JavaSript",
    Backend : "SQL",
    Database : "Java",

  }
}

var{sname , course , skills} = obj;
console.log(sname);
console.log(course);
console.log(skills);

var{frontend , Database , Backend } = skills;
console.log(frontend);
console.log(Database);
console.log(Backend);

var studentName = obj.sname;
var course = obj.course;
var skills = obj.skills;

console.log(studentName);
console.log(course);
console.log(skills);

*/

/*
var obj = 
{
  sname : "Priyanshi",
  course: "JFS",
  skills : {
    frontend:"JavaSript",
    Backend : "SQL",
    Database : "Java",

  }
}

console.log(obj);

var{sname ,course , skills: {frontend , Backend , Database}} = obj;
console.log(sname);
console.log(course);
console.log();
console.log(frontend);
console.log(Backend);
console.log(Database);

*/
// ? case 3
let obj2 = {
  sname: "Pragya",
  course: "MERN",
  skills: {
    frontend: ["HTML", "CSS", "JavaScript", "react js"],
    database: ["sql", "Node JS"],
    backend: {
      core: ["JavaScript", "Node JS"],
      advanced: ["Express JS"],
      packages: {
        dev: "Nodemon",
      },
    },
    others: {
      git: ["git", "github", "gitlab"],
      hobbies: ["Reading", "Swimming", "Scrolling Reels"],
    },
  },
};

// console.log(obj);

// Explicit way

var { sname, course, skills } = obj2;
// console.log(sname);
// console.log(course);
// console.log(skills);

var { frontend, database, backend, others } = skills;
// console.log(frontend);
// console.log(database);
// console.log(backend);
// console.log(others);

var [a, b, c, d] = frontend;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

var { core, advanced, packages } = backend;
// console.log(core);
// console.log(advanced);
// console.log(packages);

const arr = [
  {
    name: "Gautam",
    course: "Jfs",
    Expertise: "java",
  },
  {
    name: "Govind",
    course: "Jfs",
    Expertise: "web tech",
  },
  {
    name: "Yash",
    course: "Jfs",
    Expertise: "advance java",
  },
];

arr.map((value, idx) => {
  console.log(idx , " :",value.name);
});
