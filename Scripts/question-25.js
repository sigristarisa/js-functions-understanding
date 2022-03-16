// Q25. What will be the printed out by the console log statements when this code runs? Why?

function myFunction(a) {
  let b = 20;

  console.log("a:", a);
  console.log("b:", b);
  console.log("c:", c);
}

let a = 1;
let b = 2;
let c = 3;

myFunction(100);

/*** ANSWER *** 
It will log:
a:100
b:2
c:3

 Why: The function "myFunction(a)" has one parameter.
 Within the function, a variable "b" is declared and initialized with the value of 20.
 The function will log "a": a (the parameter), "b": b (variable b, which is 20), "c": c (variable c).
Out of the function, three variables are declared and initialized (a = 1, b = 2, c = 3). 
As the function is called with 100 as an argument, it takes that argument and log where the parameter a is located in the function (a:100).
The function will log b:2, because the variable b is reassigned to the value 2 (global scope).
The function will log c:3 at last, as it takes the value of variable c (global scope).

Result: It logged:
a:100
b:20
c:3

The function logged b:2, as it took the local value of variable b.
 */
