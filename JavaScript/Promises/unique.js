let arr = [1,1,3,4,4] ;


for(let i = 0; i < arr.length; i++){
  for(let j = i+1; j < arr.length; j++){
    if(arr[i] == arr[j]){
      arr[i] = -1;
      arr[j] = -1;
    }
  }
}
for(let i = 0; i < arr.length; i++){
  if(arr[i]>0)
    console.log(arr[i]);
}

let str = "my name is gautam";
for(let i = 0; i < str.length; i++){
     
}





 
  
  
