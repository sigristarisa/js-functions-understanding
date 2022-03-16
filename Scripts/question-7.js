// Q7. What will the value of counter be at the end of this program? Why?

let counter = 1;

function myFunction() {
  counter++;
  return counter;
}

myFunction();
const num = myFunction();

/*** ANSWER *** 
 The value of counter will be 3.
 
 Why: A variable counter is declared and initialized with the value 1.
 The function "myFunction()" increments 1 to the counter and returns counter.
 As the function is called in line 10 and the counter is a global scope, the function takes in the counter's value and returns 2.
 The function is assigned to a variable "num", and will increment 1 to the returned value (2 + 1 = 3).
 
 Result: as expected.
 */

console.log(num);
