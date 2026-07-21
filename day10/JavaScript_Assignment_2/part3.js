let c1 = "";
for (let i = 1; i <= 20; i++) {
  c1 += i + " ";
}
console.log(c1.trim());

let c2 = "";
let i2 = 20;
while (i2 >= 1) {
  c2 += i2 + " ";
  i2--;
}
console.log(c2.trim());

for (let i = 1; i <= 10; i++) {
  console.log(`7 x ${i} = ${7 * i}`);
}

let c4 = "";
for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) c4 += i + " ";
}
console.log(c4.trim());

let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log(`Sum of numbers from 1 to 100: ${sum}`);

/*
OUTPUT:

1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20
20 19 18 17 16 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1
7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
7 x 4 = 28
7 x 5 = 35
7 x 6 = 42
7 x 7 = 49
7 x 8 = 56
7 x 9 = 63
7 x 10 = 70
2 4 6 8 10 12 14 16 18 20 22 24 26 28 30 32 34 36 38 40 42 44 46 48 50
Sum of numbers from 1 to 100: 5050
*/