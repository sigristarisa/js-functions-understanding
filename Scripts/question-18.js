// Q.18 What will be the value of result when this code runs? Why?
function myFunction(num1) {
  return num1 * 10;

  return -100;
}

const result = myFunction(5);
/*** ANSWER *** 
 The value of result will be 50.
 
 Why: 
 The function "myFunction(num1)" takes in one parameter.
The function will return num1 * 10, despite the function also return -100 (a function can only return one value and evaluate the first value written).
As the function "myFunction(num1)" is declared with a variable "result", having 5 as an argument, it will still return 5 * 10 = 50.
 
 Result: as expected.
 */

console.log(result);
