function fun1() {
  var a = 10;
  var a1 = 11;
  var a2 = 12;

  function fun2() {
    var b = 20;
    var b1 = 21;
    var b2 = 22;

    function fun3() {
      var c = 30;
      var c1 = 31;
      var c2 = 32;

      function fun4() {
        var d = 40;

        return a + b + c + d;
      }
      return fun4;
    }
    return fun3;
  }
  return fun2;
}

console.log(fun1()()()()); // Function currying...

//closure
/*
- Closure will be createc by JSE
--whenever the nested function wants the variables of parent fubncxtion 
then closure will be created.
- the variable inside the closure comes under Lexical scope
*/

//  Function currying

/**
 * - it is the process of invoking the nested functions along with the parent function.
 */
