// ! ============ Nested Functions ============= ! 

console.log("Start");
var a = 10;
var b = 20;

function greet(){
  var sname = "Ketan";
  var course = "PFS"
  var age = 20;
  var address = "Delhi";

  function printMessage(){
    var skills = "Python";

    var message = "hello" + sname +" You have Opted for "+course +" because of your skills is "+skills;

    return message;
  }

  return printMessage();
}

console.log(greet());
console.log("end");