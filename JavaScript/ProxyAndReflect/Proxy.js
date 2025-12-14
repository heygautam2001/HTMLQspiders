/*A proxy commonly refers to a person authorized to act on behalf of another, such as voting for them in an election. It can also refer to a document that grants this authority or to a server that facilitates data exchange between users on a network.
 */

/*
Description
The Proxy object allows you to create an object that can be used in place of the original object, but which may redefine fundamental Object operations like getting, setting, and defining properties. Proxy objects are commonly used to log property accesses, validate, format, or sanitize inputs, and so on.

You create a Proxy with two parameters:

target: the original object which you want to proxy
handler: an object that defines which operations will be intercepted and how to redefine intercepted operations.
*/

const p1 = {
  fname: "piyush",
  lname: "Garg",
  age: 18,
};

// p1.age = 10;
// console.log(p1.age);

// Apply proxy in it.

// const p1Proxy = new Proxy(p1,{
//   get(target,properties){
//     console.log(target);
//     return "trsting"

//   }
// })

// console.log(p1Proxy.age);

const p1Proxy = new Proxy(p1, {
  get(target, prop) {
    if (prop in target) return target[prop];
    return false;
  },
  set(target, prop, value) {
    if (!(prop in target)) throw new Error(`${prop} does not exist`);
    switch (prop) {
      case "fname":
      case "lname": {
        if (typeof value !== "string")
          throw new Error(`${prop} must be a string`);
        break;
      }
      case "age": {
        if (typeof value !== "number")
          throw new Error(`${prop} must be a number`);
        if (value <= 0) throw new Error(`${prop} must be greaterv than zero`);
        break;
      }
    }
    Reflect.set(target,prop,value);
    // target[prop] = value;
  },
});

console.log(p1Proxy.age);
console.log(p1Proxy.fname);
console.log(p1Proxy.lname);
console.log(p1Proxy.xyz);

p1Proxy.age = 10;

console.log(p1Proxy.age);