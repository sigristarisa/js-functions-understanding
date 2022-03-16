// Q10. What will be logged out on the console when this code runs? Why?

function myFunction(num1, num2, num3) {
  console.log(num3);
}

const num1 = 10;
const num2 = 1;
const num3 = 20;

myFunction(num3, num1, 100);

/*** ANSWER *** 
 100 will be logged.
 
 Why: The function "myFunction(num1, num2, num3)" has three parameter, and logs num3.
 Three variables are declared and initialized – "num1" with a value 10, "num2" with a value 1, "num3" with a value 20.
 As the function is called, the function takes in the arguments num3 (= 20), num1 (= 10) and 100, it will log the argument equivilant to num3, which is 100.
 
 Result: as expected.
 */
