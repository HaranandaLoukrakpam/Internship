function addNumbers(a, b) {
  console.log(`Sum of ${a} and ${b} is ${a + b}`);
}

function square(n) {
  console.log(`Square of ${n} is ${n * n}`);
}

const average = (a, b, c) => {
  console.log(`Average of ${a}, ${b}, ${c} is ${(a + b + c) / 3}`);
};

function stringLength(str) {
  console.log(`Length of "${str}" is ${str.length}`);
}

function greaterNumber(a, b) {
  if (a > b) {
    console.log(`${a} is greater than ${b}`);
  } else if (b > a) {
    console.log(`${b} is greater than ${a}`);
  } else {
    console.log(`${a} and ${b} are equal`);
  }
}

addNumbers(15, 25);
square(9);
average(10, 20, 30);
stringLength("Full Stack Development");
greaterNumber(45, 78);

/*
OUTPUT:

Sum of 15 and 25 is 40
Square of 9 is 81
Average of 10, 20, 30 is 20
Length of "Full Stack Development" is 22
78 is greater than 45
*/