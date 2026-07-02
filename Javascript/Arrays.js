// let arr = [1, 2, 3, 4, 5];

// // console.log(arr); // Output: [1, 2, 3, 4, 5]
// // console.log(arr.length); // Output: 5

// // // Accessing elements
// // console.log(arr[0]); // Output: 1
// // console.log(arr[2]); // Output: 3

// // arr[0] = 10; // Modifying the first element
// // console.log(arr); // Output: [10, 2, 3, 4, 5]

// // console.log(arr[0]);

// console.log(arr.toString());
// console.log(arr.join(" and "));
// console.log(arr.pop());
// console.log(arr.push(100));
// console.log(arr.push("Mohini"));
// console.log(arr.shift());
// console.log(arr.unshift("Mannu"));
// console.log(arr);

//shift is just like pop and unshift is just like push

// let a1 = [1, 2, 3];
// let a2 = [4, 5, 6];
// let a3 = [7, 8, 9];

// console.log(a1.concat(a2, a3));
// console.log(a1.concat(a3, a2));

// let a = [8, 5, 3, 9, 1, 4, 6, 7, 2];
// console.log(a.sort());

// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers.splice(2, 1, 23, 24));
// console.log(numbers);
// console.log(numbers.length);

//Loops in arrays
let a = [1, 93, 5, 6, 88];

// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     console.log(element);
// }

// a.forEach((value, index, arr) => {
//     console.log(value, index, arr);
// })

// let obj = {
//     a: 1,
//     b: 2,
//     c: 3
// }
// for (const key in obj) {
//     if (Object.hasOwn(obj, key)) {
//         const element = obj[key];
//         console.log(element);
//         console.log(key, element);
//     }
// }

// for (const value of a) {
//     console.log(value);
// }


//Map() and Filter()
let arr = [1, 13, 5, 7, 11];
// let newArr = [];
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**2);
// }

//using map()
let newArr = arr.map((e, index, array) => {
    return e**2;
})
console.log(newArr);

const greaterThanSeven = (e) => {
    if(e>7){
        return true;
    }
    return false; 
}
console.log(newArr.filter(greaterThanSeven));

let arr2 = [1,2,3,4,5,6];

const red = (a,b) => {
    // return a*b;
    return a+b;
}

console.log(arr2.reduce(red));

