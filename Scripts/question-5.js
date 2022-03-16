//Q5. What value will be logged inside the function call? Why?

function myFunction(num, num1) {
  console.log(num1);
}

let num = 10;
let num1 = 2;

myFunction(num);

/*** ANSWER *** 
The result will be undefined.

 Why: A function "myFunction(num, num1)" is declared, which takes in two parameters.
 The function logs the parameter num1.
 In line 10, the function "myFunction(num)" is called, but only has one parameter. 
 This will mean the function in line 3 and line 10 are two different functions, and it returns undefine as the function "myFunction(num)" is not declared and initialized.

 Result: as expected.
 */
