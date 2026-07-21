let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < arr3.length; i++) {
  if (i % 2 === 0) {
    arr3[i] = "JavaScript";
  }
}
console.log("Even indices replaced:", arr3);
 

let myName = "Harananda";
let myAge = 21;
let myCity = "Imphal";
console.log(`My name is ${myName}, I am ${myAge} years old, and I live in ${myCity}.`);
 

let mixedArr2 = ["text", 25, false, null, undefined, [1, 2], { a: 1 }];
let count = 0;
for (let item of mixedArr2) {
  count++;
}
console.log("Number of elements (without .length):", count);