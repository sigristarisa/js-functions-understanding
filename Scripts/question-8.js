//Q8. What will the value of result be at the end of this program? Why?

function myFunction(num1, num2) {
  return num1 + num2;
}

const num1 = 10;
const num2 = 1;
const num3 = 4;

const result = myFunction(num3, num1);

/*** ANSWER *** 
 The value of resulte will be 14.
 
 Why: The function "myFunction(num1, num2)" has two parameter, adds them together, and return the sum.
 Three variables are declared and initialized – "num1" with a value 10, "num2" with a value 1, "num3" with a value 4.
 As the function is declared with a variable "resulte", the function takes in the arguments num3 (= 4) and num1 (= 10), add them and return 14.
 
 Result: as expected.
 */

console.log(result);
