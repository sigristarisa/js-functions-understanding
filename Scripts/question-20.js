//Q20. What will be the value of result when this code runs? Why?

function myFunction(num1, num2, num3) {
  return num1 + num3;
}

const num1 = 20;
const num2 = 200;
const num3 = 1000;

const result = myFunction(5, 10, num3, 15);

/*** ANSWER *** 
The value of result will be undefined.

 Why: The function "myFunction(num1, num2, num3)" has three parameter, and returns the sum of num1 and num3.
 Three variables are declared and initialized – "num1" with a value 20, "num2" with a value 200, "num3" with a value 1000.
 As a function "myFunction(5, 10, num3, 15)" is declared with a variable "result", undefined will be logged because "myFunction(5, 10, num3, 15)" has not been declared and initialized.
 
Result: The value of "result" is 1005.
myFunction(5, 10, num3, 15) took in 5 and num3 (value 1000) and added them together. "num3" is in global scope.
 */
console.log(result);
