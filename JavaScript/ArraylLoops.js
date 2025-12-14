
// ! ============================ !

// ! for of

// ! syantax ====> for ( let i of collectionName){}
 let arr = [10 , 20 , 30 , 40 , 50 , 60 , 70 , 80];

 for( let ele of arr ){
//   console.log(ele);
 }

 let arr1 = ["harsh " , "Govind" , "Gautam" , "Shivam" , "Dhwani" , "priyanshi"]
 
 for(let ele of arr1){
//   console.log(ele);
 }

// ! for in


let ar3 = [10 , 20 , 30 , 40 , 50 , 60 , 70 , 80];

 for( let index in ar3 ){
  console.log(index +" ele "+ar3[index]);
 }

 let arr4 = ["harsh " , "Govind" , "Gautam" , "Shivam" , "Dhwani" , "priyanshi"]
 
 for(let index in arr4){
  console.log(index);
  console.log(arr4[index]);
 }

// ! forEach()

let arr5 = [10 , 20 , 30 , 40 , 50 , 60 , 70 , 80];

 arr5.forEach((val , idx)=>{
       console.log(val , idx);
 })

 let arr6 = ["harsh " , "Govind" , "Gautam" , "Shivam" , "Dhwani" , "priyanshi"]
 
 arr6.forEach((val , idx)=>{
      console.log(val,idx);
 })
 