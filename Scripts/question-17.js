// Q.17 What will be the value of result when this code runs? Why?
function myFunction(num1) {
  return -100;

  return num1 * 10;
}

const result = myFunction(5);
/*** ANSWER *** 
 The value of result will be -100.
 
 Why: 
 The function "myFunction(num1)" takes in one parameter.
The function will return -100, despite the function also return num1 * 100 (a function can only return one value and evaluate the first value written).
As the function "myFunction(num1)" is declared with a variable "result", having 5 as an argument, it will still return -100.
 
 Result: as expected.
 */

console.log(result);
