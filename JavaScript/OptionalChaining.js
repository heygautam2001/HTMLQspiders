// ! ======================== optional chaining =================================
var obj = {
  name : {
    fname: "Shivam",
    lname : "Sharma",
  },
  address : {
    presentAddress: {
      street : "123",
      city : "Dehi",
    },
  },

};

console.log(obj);
console.log(obj.name);

if(obj){
  if(obj.name){
    if(obj.name.fname){
      console.log(obj.name.fname);
    }else{
      console.log("fname is not present");
    }
  }else{
    console.log("name is not present");
  }
}else{
  console.log("object is not present");
}

// objectName.property ?. property?.property?.property?.property

console.log(obj.name?.fname);
console.log(obj.address?.street?.city);
console.log(obj.address?.city);
console.log(obj.address?.street);

