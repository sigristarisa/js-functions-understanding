// Q21. What will be the value of result when this code runs? Why?

function myFunction(num1, num2) {
  const result = num1 + num2;
  return result;
}

const result = myFunction(10, 20);
myFunction(100, 2);

/*** ANSWER *** 
The value of result will be undefined.

 Why: The function "myFunction(num1, num2)" has two parameter.
 Within the function, a variable "result" is declared and initialized the value of the sum of num1 and num2.
 Out of the function, a variables "result" is declared and initialized with a value of myFunction(10, 20).
 Afterwards, "myFunction()" is declared with two arguments 100, 2.
The variable "result" will have 30 as a valuable, as it returns the sum of its arguments (10 + 20).
 
Result: as expected.
 */

console.log(result);
