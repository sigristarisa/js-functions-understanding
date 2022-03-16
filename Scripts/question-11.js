// Q11. What will be the value of result when this code runs? Why?

function getSomeValue() {
  return 2;
}

function myFunction(num1) {
  const num2 = getSomeValue();
  return num1 * num2;
}

const result = myFunction(5);

/*** ANSWER *** 
 10 will be logged.
 
 Why: The function "getSomeValue()" returns 2.
 The function "myFunction(num1)" takes in one parameter, and within it a variable num2 is declared and initialized to the function "getSomeValue()".
 The function "myFunction(num1)" returns num1 * num2.
 As the function "myFunction(num1)" is declared with a variable result, having 5 as an argument, it will return 5 * 2 = 10.
 
 Result: as expected.
 */

console.log(result);
