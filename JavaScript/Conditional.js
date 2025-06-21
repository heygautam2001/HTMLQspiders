// ! if conditions
// case 1

console.log("start");
let sname = "Harsh";

if(sname == "Pragya"){
  console.log("Welcome Harsh");
}

if(sname == "Harsh")
  {
    console.log("welcome Harsh");
  }

  if(sname == "manav"){
    console.log("welcome manav");
  }

  console.log("end");

  // case 2:

  console.log("start");
  let age = 21;

  if(age >= 18){
    console.log("You are eligible for voting");
  }

  age = 40;

  if(age >= 18)
    {
      console.log("you are eligible for voting");
    }

    age = 5;
    if(age >= 18){
      console.log("you are eligible for voting");
    }

    console.log("end");

    // if-else
    // ? case 1:

    console.log("start");
    var ename = "sristi"

    if(ename == "Harsh"){
      console.log("welcome harsh");
    }else{
      console.log("change your name to harsh");
    }

    // Case 2:

    let ages = 17;

    if(ages >= 18){
      console.log("you are eligible for voting");
    }else{
      console.log("You have to wait for " , 18-ages,"year");
    }


    // if-elseif-else

    console.log("Start");
    let course = "DevOps";

    if(course === "java"){
      console.log("java is best");
    }else if(course === "Python"){
      console.log("Python is best for AI");
    }else if(course === "MERN"){
      console.log("Mern id beteter than anything");
    }else
    {
      console.log("Choose JAVA Full Stack");
    }

    console.log("end");

    // Nested if:
    // ? Case 1:

    console.log("Start");
    let sage = 50;

    if(0 <= age <= 100){
      if(0 <= age <= 50){
        console.log("You are the first half of life line");
      }else{
        console.log("You are the second half of the life line");
      }
    }else{
      console.log("Invalid Age");
    }

    console.log("end");


    // ? case 2:

    console.log("Start");
    let Age = 24;

    if(0 <= age <= 100){
      if(0<= age <= 50){
        console.log("You are first half of the line");

        let marriedStatus = false;
        if(0 <= age <= 25 ){
          console.log("you are married at young age");
        }else{
          console.log("Don't Marry , Be Happy , Be Alive");
        }
      }else {
        console.log("lets explore the world");
      }
    }else{
       console.log("Invali age");
    }


    console.log("End");
  
