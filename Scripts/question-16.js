// Q16. What will be the value of result when this code runs? Why?

function myFunction(num1) {
  if (false) {
    return -100;
  }

  return num1 * 10;
}

const result = myFunction(5);

/*** ANSWER *** 
 The value of result will be 50.
 
 Why: 
 The function "myFunction(num1)" takes in one parameter.
 If false is truethy, it will return -100. If not, it will return num1 * 10.
 As the function "myFunction(num1)" is declared with a variable "result", having 5 as an argument, it will return  50 as false is falsey.
 
 Result: as expected.
 */

console.log(result);
