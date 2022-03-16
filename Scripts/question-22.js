// Q22. What will be the value of result when this code runs? Why?

function myFunction(num1, num2) {
  let result = num1 + num2;
  return result;
}

let result = 0;
myFunction(100, 2);

/*** ANSWER *** 
The value of result will be 0.

 Why: The function "myFunction(num1, num2)" has two parameter.
 Within the function, a variable "result" is declared and initialized the value of the sum of num1 and num2.
 Out of the function, a variables "result" is declared and initialized with a value of 0.
 Afterwards, "myFunction()" is called with two arguments 100, 2.
The variable "result" will have 0 as a valuable, as its value has been reassigned to 0.
 
Result: as expected.
 */

console.log(result);
