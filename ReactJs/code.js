// ! ========= Export File ===========

// ? Default export
// let sname = "Fiza Kapoor";
// let course = "Python Full Stack";

// export default sname;
// export default course;

//? Named export
// ~ case 1:

// let product1 = "Masala";
// export let product2 = "clothes";
// let product3 = "cars";
// export let product4 = "Chocolate dhwani";


// ~ case 2:
// let product1 = "Masala";
// let product2 = "Clothes";
// let product3 = "Cars";
// let product4 = "Chocolate Dhwani";
// export{product2}
// export{product4}


// ~ case 3:

// let product1 = "Masala";
// let product2 = "Clothes";
// let product3 = "Cars";
// let product4 = "Chocolate Dhwani";

// export{product1 , product2 , product3 , product4};

// ~ Case 4:

// let data1 = 10;
// let data2 = "Hello";
// let data3 = ["Manav" , "Fiza" , "Dhwani" , "Ankit 9.5 LPA" , "Srishti 11LPA"];

// let data4 = {
//   sname: "srishti",
//   isPlaced: true,
//   package: "11 LPA",
//   college:"IITB"
// };

// function addition(a,b){
//   return a+b;
// }

// function subtraction(a,b){
//   return a-b;
// }

// function multiplication(a,b){
//   return a*b;
// }

// function division(a,b){
//   return a/b;
// }

// export {
//   data1 , 
//   data2 ,
//   data3 , 
//   data4,
//   addition, 
//   subtraction, 
//   multiplication, 
//   division,
// }

// ~ case 5:

function addition(a,b){
  return a+b;
}

function subtraction(a,b){
  return a-b;
}

function multiplication(a,b){
  return a*b;
}

function division(a,b){
  return a/b;
}

export{
  addition as add, 
  multiplication as multiply,
  subtraction as subtract,
  division as divide,
}

let professorName = "Ankittttt";
export default professorName;



