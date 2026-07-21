let p = 10;
let q = "10";
 
console.log("== :", p == q);   
console.log("=== :", p === q); 
console.log("!= :", p != q);   
console.log("!== :", p !== q); 
console.log("> :", p > 5);     
console.log("< :", p < 5);     
console.log(">= :", p >= 10);  
console.log("<= :", p <= 9);   
 

console.log(10 == '10');  
console.log(10 === '10'); 
 

console.log(null == undefined);  
console.log(null === undefined); 
 

let age1 = 25;
let age2 = 30;
let name1 = "Harananda";
let name2 = "Lucky";
 
if (age1 > age2) {
  console.log(name1 + " is older.");
} else if (age2 > age1) {
  console.log(name2 + " is older.");
} else {
  console.log("Both are the same age.");
}
 