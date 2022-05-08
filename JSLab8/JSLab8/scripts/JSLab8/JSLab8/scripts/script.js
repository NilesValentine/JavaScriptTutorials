/*Modify the code below so that it prints out 
the last element in the array. */
let primitives = ["string", 0.0, true, 1n, null, undefined, "Symbol... whatever that is"];
console.log(primitives[primitives.length]);

/*Modify the code so that it adds "dinner" 
to the end of the array*/
const squareMeals = 3; 
let array = new Array(3);
array.join("dinner");
console.log(array);


/*Modify the code below so that it 
prints 6 (without just printing the value, that's too easy)*/
let number = 5;
console.log(number++);

/*
Rori wants to figure out her weekly budget. 
She must subtract the amount of her bills 
from her payPerMonth. Then divide that amount 
by the number of weeks in a month. 
Save the result in budgetPerWeek.
*/ 

let budgetPerWeek = payPerMonth - rent - loans - carPayMent; 
let rent = 1000.00; 
let loans = 200.00;
let carPayMent = 200.00;
let payPerMonth = 3000.00;

console.log("Rori has $"+budgetPerWeek+" to spend per week.");

/*
What if Rori wants to also put some money toward 
savings? 
Fix the formula below so that it properly 
calculates Rori's weekly budget including savings
*/

let savings = 100; 
budgetPerWeek = payPerMonth - rent - loans - carPayMent- savings/4;
console.log("Rori can spend $"+budgetPerWeek+" if she saves "+savings+"/month.");

 
