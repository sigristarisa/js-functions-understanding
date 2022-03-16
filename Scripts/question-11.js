// Q11. What will be the value of result when this code runs? Why?

function myFunction(num1, num2, num3) {
  return num1 + num2 + num3;
}

const num1 = 10;
const num2 = 1;
const num3 = 20;

const result = myFunction(1, 1, 1);

/*** ANSWER *** 
 The value of result will be 3.
 
 Why: The function "myFunction(num1, num2, num3)" has three parameters, returns the sum of those parameters.
 Three variables are declared and initialized – "num1" with a value 10, "num2" with a value 1, "num3" with a value 20.
The function "myFunction(num1, num2, num3)" is initialized with the variable "result", having 1, 1, 1 as arguments.
The variable "result" will return 1 + 1 + 1, which is 3.

Result: as expected.
 */

console.log(result);
