// Q6. What value will be logged inside the function call? Why?

function myFunction(num, num1) {
  console.log(num1);
}

let num = 10;
let num1 = 2;

myFunction(num1, num);

/*** ANSWER *** 
10 will be logged.

 Why: A function "myFunction(num, num1)" is declared, which takes in two parameters.
 The function logs the parameter num1.
 A variable "num" is declared and been initialized with the value of 10 (line 7).
 A variable "num1" is declared and been initialized with the value of 2 (line 8).
 The function "myFunction(num1, num)" is called with its arguments num1 and num, which will log the value of num (= 10).

 Result: as expected.
 */
