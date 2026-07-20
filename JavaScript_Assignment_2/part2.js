function printVowels(str) {
  const vowels = "aeiouAEIOU";
  let result = "";
  
  for (let ch of str) {
    if (vowels.includes(ch)) result += ch;
  }
  
  console.log(`Vowels in "${str}": ${result}`);
}

function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;
  
  for (let ch of str) {
    if (vowels.includes(ch)) count++;
  }
  
  console.log(`Vowel count in "${str}": ${count}`);
}

function printChars(str) {
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
  }
}

function countSpaces(str) {
  let count = 0;
  
  for (let ch of str) {
    if (ch === " ") count++;
  }
  
  console.log(`Number of spaces in "${str}": ${count}`);
}

function reverseString(str) {
  let reversed = "";
  
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  
  console.log(`Reverse of "${str}": ${reversed}`);
}

printVowels("JavaScript is awesome");
countVowels("Masai School");
printChars("Full Stack Development");
countSpaces("We are learning JavaScript");
reverseString("Hello");

/*
OUTPUT:

Vowels in "JavaScript is awesome": aaiaieoe
Vowel count in "Masai School": 5
F
u
l
l
 
S
t
a
c
k
 
D
e
v
e
l
o
p
m
e
n
t
Number of spaces in "We are learning JavaScript": 3
Reverse of "Hello": olleH
*/