//Array with mixed data types
let mixedArr = ["Hello", 42, true, null, undefined];
console.log(mixedArr);
 
//First, last element, length
console.log("First:", mixedArr[0]);
console.log("Last:", mixedArr[mixedArr.length - 1]);
console.log("Length:", mixedArr.length);
 
//Add two elements using push()
mixedArr.push("New Item", 100);
console.log("After push:", mixedArr);
 
//Remove last element using pop()
mixedArr.pop();
console.log("After pop:", mixedArr);
 
//Replace third element with city name
mixedArr[2] = "Imphal";
console.log("After replace:", mixedArr);
 
//Number array operations
let numbers = [10, 20, 30, 40, 50];
console.log("Length:", numbers.length);       
 
numbers.push(60);                              
console.log("After push 60:", numbers);
 
numbers.pop();                                 
console.log("After pop:", numbers);
 
numbers[2] = 100;                              
console.log("After changing 30 to 100:", numbers);
 
console.log("Final array:", numbers);
 
//Nested array
let data = [1, 2, [3, 4, 5], 6];
console.log("Value 3:", data[2][0]);
console.log("Value 5:", data[2][2]);
console.log("Length of nested array:", data[2].length);
console.log("Length of outer array:", data.length);
 