// Q15. What will be the value of result when this code runs? Why?

function myFunction(num1) {
  if (true) {
    return -10;
  }

  return num1 * 10;
}

const result = myFunction(5);

/*** ANSWER *** 
 The value of result will be -10.
 
 Why: 
 The function "myFunction(num1)" takes in one parameter.
 If true is truethy, it will return -10. If true is falsey, it will return num1 * 10.
 As the function "myFunction(num1)" is declared with a variable "result", having 5 as an argument, it will return  -10 as true is truethy. 
 
 Result: as expected.
 */

console.log(result);
