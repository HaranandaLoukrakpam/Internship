const student = {
  name: "Harananda",
  age: 20,
  course: "B.Tech Data Science & AI",
  university: "ADTU",
};

for (let key in student) {
  console.log(key);
}

for (let key in student) {
  console.log(student[key]);
}

const marks = {
  Math: 78,
  Science: 65,
  English: 88,
  History: 55,
};
let minSubject = null;
let minMarks = Infinity;
for (let subject in marks) {
  if (marks[subject] < minMarks) {
    minMarks = marks[subject];
    minSubject = subject;
  }
}
console.log(`Subject with minimum marks: ${minSubject} (${minMarks})`);

let propCount = 0;
for (let key in student) {
  propCount++;
}
console.log(`Total properties in student object: ${propCount}`);

const sample = { a: 1, b: 2, c: 3 };
for (let key in sample) {
  console.log(`${key} -> ${sample[key]}`);
}

/*
OUTPUT:

name
age
course
university
Harananda
20
B.Tech Data Science & AI
ADTU
Subject with minimum marks: History (55)
Total properties in student object: 4
a -> 1
b -> 2
c -> 3
*/