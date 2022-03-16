//Q13. What will be the value of result when this code runs? Why?

function getSomeValue() {
  return 2;
}

function myFunction(num1) {
  const num2 = getSomeValue();
  return num1 * getSomeValue();
}

const result = myFunction(5);

/*** ANSWER *** 
 10 will be logged.
 
 Why: The function "getSomeValue()" returns 2.
 The function "myFunction(num1)" takes in one parameter, and within it a variable num2 is declared and initialized to the function "getSomeValue()".
 The function "myFunction(num1)" returns num1 * getSomeValue().
 As the function "myFunction(num1)" is declared with a variable "result", having 5 as an argument, it will return 5 * 2 = 10. 
 The value 2 is not from the declared "num2" but from the global function getSomeValue().
 
 Result: as expected.
 */

console.log(result);
