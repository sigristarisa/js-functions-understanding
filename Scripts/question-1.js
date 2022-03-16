// Q1. What is the value of result after calling this function? Why?

function myFunction(num1, num2) {
  return num1 + num2;
}

const result = myFunction(5, 5);

/*** ANSWER *** 
 The result will be 10.
 
 Why: the function "myFunction(num1, num2)" is initialized as an variable called "result". 
 The function "myFunction(num1, num2)" returns adding num1 and num2.
 As the "myFunction(num1, num2)" has two arguments (5, 5), it returns 5 + 5 when the result is called
 */

console.log(result);
