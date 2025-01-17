// Q23. What will be the value of result when this code runs? Why?

function myFunction(num1, num2) {
  result = num1 + num2;
}

let result = 0;
myFunction(100, 2);

/*** ANSWER *** 
The value of result will be 0.

 Why: The function "myFunction(num1, num2)" has two parameter.
 Within the function, "result" is equivalent to the sum of num1 and num2.
 Out of the function, a variables "result" is declared and initialized with a value of 0.
 Afterwards, "myFunction()" is called with two arguments 100, 2.
The variable "result" will have 0 as a valuable, as we are calling the value of "result" in line 7.
 
Result: The value is 102.
The function, which does not have a variable declared as result, will look outside to the global scope.
let result = 0 is there, so the variable is declared and the function can be assign the num1+num2 to the variable.
console.log(result)=num1+num2
 */

console.log(result);
