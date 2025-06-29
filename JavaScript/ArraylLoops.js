
// ! ============================ !

// ! for of

// ! syantax ====> for ( let i of collectionName){}
 let arr = [10 , 20 , 30 , 40 , 50 , 60 , 70 , 80];

 for( let ele of arr ){
  console.log(ele);
 }

 let arr1 = ["harsh " , "Govind" , "Gautam" , "Shivam" , "Dhwani" , "priyanshi"]
 
 for(let ele of arr1){
  console.log(ele);
 }

// ! for in


let ar3 = [10 , 20 , 30 , 40 , 50 , 60 , 70 , 80];

 for( let ele in arr ){
  console.log(ele);
 }

 let arr4 = ["harsh " , "Govind" , "Gautam" , "Shivam" , "Dhwani" , "priyanshi"]
 
 for(let ele in arr1){
  console.log(ele);
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
 