/* Create a faulty calculator
This faulty calculator does following:
1. It takes two numbers as input from the user.
2. IT performs wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **

It performs wrong operation 10% of the times

*/

//SOLUTION Example - 1
// function faultyCalculator(num1, num2, operator){
//     // Generating a random number between 0 and 1
//     const randomNum = Math.random();
//     //Check if the random number is less than 0.1(10% chance)
//     if(randomNum < 0.1){
//         switch(operator){
//             case '+':
//                 return num1 - num2;
//             case '-':
//                 return num1 * num2;
//             case '*':
//                 return num1 / num2;
//             case '/':
//                 return num1 ** num2;
//             default:
//                 return 'Invalid operator';
//         };
//     } 

//     else {
//         //Perform the correct oepration
//         switch(operator){
//             case '+':
//                 return num1 + num2;
//             case '-':
//                 return num1 - num2;
//             case '*':
//                 return num1 * num2;
//             case '/':
//                 return num1 / num2;
//             default:
//                 return 'Invalid operator';
//         };
//     }
// };

// result = faultyCalculator(1, 5, '+');
// console.log(result);


//SOLUTION Example - 2 
let random = Math.random();
let a = prompt("Enter first number: ");
let b = prompt("Enter second number: ");
let operator = prompt("Enter operator (+, -, *, /): ");

let obj = {
    "+": "-",
    "-": "*",
    "*": "/",
    "/": "**"
};

console.log(`Random number generated: ${random}`);

if (random > 0.1) {
    //Perform the correct operation
    console.log(`The result is: ${eval(`${a} ${operator} ${b}`)}`);
    alert(`The result is: ${eval(`${a} ${operator} ${b}`)}`);
}

else {
    //Perform the wrong operation
    operator = obj[operator];
    alert(`The result is: ${eval(`${a} ${operator} ${b}`)}`);
    console.log(`The result is: ${eval(`${a} ${operator} ${b}`)}`);
}