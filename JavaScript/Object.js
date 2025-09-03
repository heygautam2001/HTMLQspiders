// ! Objects

/**
 * - It is a special way of storing the data in the form of key and value pair.
 * - we have to enclose the data in {}
 * - Each property will be separated by , .
 * - Each property constains key and value pairs which are separated by  :
 * - Key must be unique , if itv's repeated it will update the value.
 */

var obj = {
  sname: "Gautam",
  age: 16,
  course: "Java Full Stack",
  age: 20,
  course: "MERN STACK",
  47: "Bike Rider",
  skills: [
    "Html",
    "CSS",
    "javaScript",
    "React Js",
    "Cooking",
    "Singing",
    "Dancing",
  ],
};

// console.log(obj);
// console.log(typeof obj);

// ? ================================= Read =========================
// ~ 1. dot notation
// Syntax : ObjName.KeyName -------> value
// console.log(obj.age);
// console.log(obj.sname);
// console.log(obj.course);
// console.log(obj.address);

//  console.log(obj.47); // we cannot access like that.. number keys

// console.log(obj.skills);
// console.log(obj.skills[2]);
// console.log(obj.skills[4][3]);

// ~ Bracket Notation
// synatx : ObjName["KeyName"] ------ > values

// console.log(obj["age"]);
// console.log(obj["sname"]);
// console.log(obj["course"]);
// console.log(obj["address"]);
// console.log(obj["47"]);
// console.log(obj[47]);

// var age = "sname";
// var x = "age";
// var course = x;
// var sname = course;
// console.log(obj[sname]); /// In this case name is treated like a variable name.
// console.log(obj["age"]);
// console.log(obj["sname"]);

// ? ========= create -========

// ~ dot notation
// syantx : objname.keyName = value
obj.address = "Delhi";
obj.institute = "Qspiders Delhi";
// console.log(obj);

// ~ Bracket notation
// syntax : objName["keyName"] = value;

// obj["Friends"] = ["Ketan" , "Gaurav" , "Ankit"];
// var girlFriendCount = "gfcount"
// obj[girlFriendCount] = 0;

// console.log(obj);

// ? ======== Update ===========

// dot notation
// Syntax : objName.existingKeyName = newvalue;
// obj.sname = "Himanshu";
// obj.skills[2] = "TypeScript";
// console.log(obj);

// ~ bracket Notation
//syntax : objName["ExistingKeyName"] = newvalue;
// obj["age"] = 16;
// obj[girlFriendCount] =  10;

// console.log(obj);

// ? ============== Delete ============
// ~ dot Notation

delete obj.gfcount;
delete obj.institute;
delete obj.Friends;

// ~ Bracket Notation
// syntax : delete objName["existingKeyname"];

delete obj["address"];
delete obj["skills"];
delete obj["course"];

console.log(obj);

// obj["age"] = 36;
// console.log(obj);

