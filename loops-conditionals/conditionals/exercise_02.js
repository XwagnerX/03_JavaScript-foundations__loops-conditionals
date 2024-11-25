/* 
   Spot the bug 🐞
   Should print: "Most places consider you an adult."... but it doesn't, why?

   Add a comment explaining what is happenning and how to fix it
*/

const age = 20;

function checkAge(){
if (age < 3) {
  console.log("You're just a baby!");
  return;
}
if (age >= 3) {
  console.log("You are in elementary school, kid.");
  return;
}
if (age >= 13) {
  console.log("Nice, you're a teenager!");
  return;
}
if (age >= 18) {
  console.log("Most places consider you an adult.");
  return;
}

console.log("What? How did this happen!?");
return  
}

checkAge()


/*
  Problem: With this structure of multiple separate "if" statements, the code will print 
  "You are in elementary school, kid." when age is 3 or higher, without evaluating the other 
  conditions (13 and 18), because each "if" is independent.
  Solution: Change to "else if" after the first "if" to ensure that only one condition is evaluated 
  and the correct message is printed based on the value of "age".
*/
