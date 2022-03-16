// Q14. What will be the value of result when this code runs? Why?

function getSomeValue() {
  return 2;
}

function myFunction(num1) {
  return getSomeValue() * getSomeValue();
}

const result = myFunction(5);

/*** ANSWER *** 
 The value of result will be 4.
 
 Why: The function "getSomeValue()" returns 2.
 The function "myFunction(num1)" takes in one parameter, and returns getSomeValue() * getSomeValue().
 As the function "myFunction(num1)" is declared with a variable "result", having 5 as an argument, it will return 2 * 2 = 4. 
 The value 2 is from the global function getSomeValue().
 
 Result: as expected.
 */

console.log(result);
