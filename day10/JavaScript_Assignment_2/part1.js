function evenOdd(num) {
  if (num % 2 === 0) {
    console.log(`${num} is Even`);
  } else {
    console.log(`${num} is Odd`);
  }
}

function fizzBuzz(num) {
  if (num % 3 === 0 && num % 7 === 0) {
    console.log("FizzBuzz");
  } else if (num % 3 === 0) {
    console.log("Fizz");
  } else if (num % 7 === 0) {
    console.log("Buzz");
  } else {
    console.log(num);
  }
}

function greatestOfThree(a, b, c) {
  let greatest = a;
  
  if (b > greatest) greatest = b;
  if (c > greatest) greatest = c;
  
  console.log(`Greatest number among ${a}, ${b}, ${c} is ${greatest}`);
}

function passOrFail(marks) {
  if (marks >= 40) {
    console.log(`Marks: ${marks} -> Pass`);
  } else {
    console.log(`Marks: ${marks} -> Fail`);
  }
}

evenOdd(7);
evenOdd(10);

fizzBuzz(21);
fizzBuzz(9); 
fizzBuzz(14);
fizzBuzz(20);

greatestOfThree(12, 45, 30);

passOrFail(55);
passOrFail(30);

console.log(5 > 3 && 8 > 2);
console.log(5 > 3 && 8 < 2);
console.log(0 && "Hello");
console.log("Hi" && "Bye");
console.log(5 > 3 || 8 < 2);
console.log(0 || "Hello");
console.log(null || undefined);

/* 
OUTPUT:

7 is Odd
10 is Even
FizzBuzz
Fizz
Buzz
20
Greatest number among 12, 45, 30 is 45
Marks: 55 -> Pass
Marks: 30 -> Fail
true
false
0
Bye
true
Hello
undefined
*/