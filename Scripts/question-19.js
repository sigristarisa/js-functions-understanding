// Q19. What will be the value of result when this code runs? Why?

function myFunction(num1, num2, num3) {
  return num2;
}

const result = myFunction(5, 10, 15);

/*** ANSWER *** 
 The value of result is 10.
 
 Why: The function "myFunction(num1, num2, num3)" has three parameter, and returns the num2.
 As the function is called, the function takes in the arguments num3 (= 20), num1 (= 10) and 100, it will log the argument equivilant to num3, which is 100.
 As the function "myFunction(num1, num2, num3)" is declared with a variable "result", having 5, 10, 15 as an argument, it will only return the argument 10.
  

 Result: as expected.
 */

console.log(result);
