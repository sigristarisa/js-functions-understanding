// Q2. What is the value of result after calling this function? Why?

function myFunction(num1, num2) {
  num1 + num2;
}

const result = myFunction(5, 5);

/*** ANSWER *** 
 The result will be undefined.
 
 Why: the function "myFunction(num1, num2)" is initialized as an variable called "result". 
 The function "myFunction(num1, num2)" adds num1 and num2, but will not return it.
 As the "myFunction(num1, num2)" has two arguments (5, 5) but will not return anything, it returns undefined when the result is called

 Result: as expected.
 */

console.log(result);
