// ! ========== Object Method ==============

/**
 * Keys
 * valuses
 * entries
 * hasOwnProperty
 * assign
 * create
 * freeze
 */

var obj = {
  sname : "Rohit" ,
  age : 20,
  course : "React Js"
};

console.log(obj);

// ? Object.keys(objName);

console.log(Object.keys); // it wll retuirm a method which is availabke in the inbuilt object.
// This method requieres an object as parameter.
// It will return only the keys.

console.log(Object.keys(obj));

// ? Object.values(objName);
console.log(Object.values); 
// it wll retuirm a method which is availabke in the inbuilt object.
// This method requires an object as a parameter.
// It will return only the values

console.log(Object.values(obj));

// ? Object.entries(objName);
console.log(Object.entries);
  // it wll retuirm a method which is availabke in the inbuilt object.
// This method requires an object as a parameter.
// It will return only the values and the keys

console.log(Object.entries(obj));

// ~ ObjectName.hasOwnProperty(keyName) -----> boolean

console.log(obj.hasOwnProperty("sname")); // true
console.log(obj.hasOwnProperty("ename")); // false
console.log(obj.hasOwnProperty("address")); // false
console.log(obj.hasOwnProperty("age")); // true
console.log(obj.hasOwnProperty("course")); // true

// ? Object.assign(obj1 , obj2 , obj3 ..... objn);

var obj1 = {
  sname : "Ankit",
  age : 20,
  course : "Java Full-stack",
};

var obj2 = {
  address : "Delhi",
  college : "IITM"

}

var obj3 = {
  isPlaced: true,
  course: "Data science",
};

console.log(obj1);
console.log(obj2);
console.log(obj3);

var mergeObj = Object.assign({} , obj1 , obj2 , obj3);

console.log(mergeObj);

// ? ==== Object.create ======== 

var person = {
  personName : "Personnnnnnnn",
  getPersonName : function(){
    return `${this.personName}`
  } ,

};

var employee = Object.create(person);
employee.name = "enameeeeee ";
employee.age = 20;
employee.salary = 50000;
console.log(employee);


console.log(employee.personName);

var e = Object.create(employee);
e.address = "Delhi";
e.college  = "xyz";

console.log(e);
console.log(e.address);
console.log(e.personName);
console.log(employee.personName);


// ? Object.freeze(objName);

var obj = {
  sname : "Ankit" , 
  age : 20,
  course : "java full--stack"
}
Object.freeze(obj);

obj.name = "Aman"
obj.address = "Delhi"

console.log(obj);

