let arr = [10, 20, 30, 40, 50];
console.log("Original array:", arr);

arr.push(60);
console.log("After push(60):", arr);

arr.pop();
console.log("After pop():", arr);
console.log("Length:", arr.length);

arr[0] = 100;
console.log("After updating index 0 to 100:", arr);

const fruits = ["Apple", "Mango", "Banana", "Orange"];
for (let fruit of fruits) {
  console.log(fruit);
}

const nums = [23, 56, 89, 12, 100, 45];
let largest = nums[0];
for (let n of nums) {
  if (n > largest) largest = n;
}
console.log(`Largest number in [${nums}] is ${largest}`);

const nums2 = [5, 10, 15, 20, 25];
let arrSum = 0;
for (let n of nums2) {
  arrSum += n;
}
console.log(`Sum of [${nums2}] is ${arrSum}`);

const nums3 = [2, 5, 8, 11, 14, 17, 20];
let evenCount = 0;
for (let n of nums3) {
  if (n % 2 === 0) evenCount++;
}
console.log(`Even number count in [${nums3}] is ${evenCount}`);

/*
OUTPUT:

Original array: [ 10, 20, 30, 40, 50 ]
After push(60): [ 10, 20, 30, 40, 50, 60 ]
After pop(): [ 10, 20, 30, 40, 50 ]
Length: 5
After updating index 0 to 100: [ 100, 20, 30, 40, 50 ]
Apple
Mango
Banana
Orange
Largest number in [23,56,89,12,100,45] is 100
Sum of [5,10,15,20,25] is 75
Even number count in [2,5,8,11,14,17,20] is 4
*/