// Q24. What will be the value of result when this code runs? Why?

function myFunction(num1, num2) {
  const result = num1 + num2;
  return 100;
}

const result = myFunction(5, 2);

/*** ANSWER *** 
The value of result will be 100.

 Why: The function "myFunction(num1, num2)" has two parameter.
 Within the function, a variable "result" is declared and initialized with the value of the sum of num1 and num2.
 The function will return 100.
 Out of the function, a variables "result" is declared and initialized with a function with 5 and 2 as an argument.
As the "result" is called, the function will return 100.

Result: as expected.
 */

console.log(result);
