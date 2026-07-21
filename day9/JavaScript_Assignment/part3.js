//Positive or negative
let num1 = -7;
if (num1 > 0) {
  console.log(num1 + " is positive.");
} else if (num1 < 0) {
  console.log(num1 + " is negative.");
} else {
  console.log(num1 + " is zero.");
}
 
//Pass or fail
let marks = 55;
if (marks >= 40) {
  console.log("Passed");
} else {
  console.log("Failed");
}
 
//Larger of two numbers
let n1 = 15;
let n2 = 30;
console.log(n1 > n2 ? n1 + " is larger" : n2 + " is larger");
 
//Largest of three numbers
let a = 10, b = 45, c = 22;
if (a >= b && a >= c) {
  console.log(a + " is the largest");
} else if (b >= a && b >= c) {
  console.log(b + " is the largest");
} else {
  console.log(c + " is the largest");
}
 
//Even or odd
let n = 17;
if (n % 2 === 0) {
  console.log(n + " is even");
} else {
  console.log(n + " is odd");
}
 
//Grade classification
function classifyMarks(marks) {
  if (marks > 90) {
    console.log("Excellent");
  } else if (marks >= 75) {
    console.log("Good");
  } else if (marks >= 50) {
    console.log("Average");
  } else {
    console.log("Fail");
  }
}
classifyMarks(95); 
classifyMarks(80); 
classifyMarks(60); 
classifyMarks(30); 
 