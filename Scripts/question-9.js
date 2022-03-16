// Q9. What will be logged out on the console when this code rus? Why?

function myFunction(num1, num2) {
  console.log(num3);
}

const num1 = 10;
const num2 = 1;
const num3 = 20;

myFunction(num3, num1);

/*** ANSWER *** 
 undefined will be logged.
 
 Why: The function "myFunction(num1, num2)" has two parameter, and logs num3 (which is not an parameter).
 Three variables are declared and initialized – "num1" with a value 10, "num2" with a value 1, "num3" with a value 20.
 As the function is called", the function takes in the arguments num3 (= 20) and num1 (= 10), but will not log anything.
 
 Result: as expected.
 */