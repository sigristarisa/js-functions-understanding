// Q4. What is the value of add and num at the end of the program? Why?

function myFunction(num) {
  return num - 1;
}

let num = 10;
let add = 3;
add = myFunction(add);
add = myFunction(add);

/*** ANSWER *** 
 The value of "add" will be 1 and the value of "num" will be 10.
 
 Why: A variable "num" is declared and initialized with the value 10 (line 7).
 A variable "add" is declared and initialized with the value 3 (line 8).
 The variable "add" is reassigned to the function "myFunction(add)" with an argument add (= 3), which will subtract 1 from the argument.
 Same happens in line 10 – the variable "add" is called and subtract 1 from the argument.

 Result: as expected.
 */

console.log(add);
console.log(num);
