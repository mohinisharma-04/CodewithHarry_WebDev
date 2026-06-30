console.log("Hello I am Conditional tutorial");

let age = 1;
// let grace = 2;

// age += grace;
// console.log(age);
// console.log(age + grace);
// console.log(age - grace);
// console.log(age * grace);
// console.log(age / grace);
// console.log(age ** grace);
// console.log(age % grace);

// if((age+grace)>18) {
//     console.log("You can drive");
// }


// Operators:  // >, <, >=, <=, == (matches values), === (used to match both values and types), !=, !==

// Arithmetic Operators:  +, -, *, /, %, **

// Camparison Operators:  &&, ||, ! (logical and or not)

if(age == 18) {
    console.log("You can drive");
}

else if(age == 0) {
    console.log("Are you kidding?")
}

else if(age == 1) {
    console.log("Are you again kidding?")
}

else {
    console.log("You cannot drive");
}

// Ternary Operator
// c = a > b ? (a - b) : (b - a)

a = 6;
b = 8;
let c = a > b ? (a - b) : (b - a);
console.log(c);

/*
translates to:
if(a>b){
   let c = a - b;
}
else {
   let c = a - b;
}

*/