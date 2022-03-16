// Q3. What is the value of num at the end of the program? Why?
function myFunction(num) {
  return num - 1;
}

let num = 10;
num = myFunction(num);
num = myFunction(num);

/*** ANSWER *** 
 The value of "num" will be a function "myFunction(num)".
 
 Why: A variable "num" is declared and initialized with the value 10 (line 6).
 The variable is reassigned to the value "myFunction(num)" (line 7).
 The same reassignment is been done (line 8), which remains as the value "myFunction(num)".

 Result: It returned 8.
 I assume the function "myFunction(num)" was called twice with an argument 10, so it subtracted -1 twice.


 */

console.log(num);
