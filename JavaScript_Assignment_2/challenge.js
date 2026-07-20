function secondLargest(array) {
  let first = -Infinity;
  let second = -Infinity;
  
  for (let n of array) {
    if (n > first) {
      second = first;
      first = n;
    } else if (n > second && n !== first) {
      second = n;
    }
  }
  return second;
}

function countVowelsConsonants(str) {
  const vowels = "aeiouAEIOU";
  let vowelCount = 0;
  let consonantCount = 0;
  
  for (let ch of str) {
    if (/[a-zA-Z]/.test(ch)) {
      if (vowels.includes(ch)) {
        vowelCount++;
      } else {
        consonantCount++;
      }
    }
  }
  console.log(`"${str}" -> Vowels: ${vowelCount}, Consonants: ${consonantCount}`);
}

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function reverseStr(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

const challengeArr = [45, 12, 89, 33, 89, 67];
console.log(`Second largest in [${challengeArr}] is ${secondLargest(challengeArr)}`);

countVowelsConsonants("Programming");

const studentInfo = {
  name: "Harananda Loukrakpam",
  age: 20,
  university: "Assam Down Town University (ADTU)",
  subjects: ["Data Science", "AI", "Web Development", "Mathematics"],
  hobbies: ["Riding motorcycles", "Watching philosophical films", "Coding"],
};

for (let key in studentInfo) {
  console.log(`${key}: ${studentInfo[key]}`);
}

[7, 15, 29, 1, 2].forEach((n) => {
  console.log(`${n} is ${isPrime(n) ? "Prime" : "Not Prime"}`);
});

console.log(`Reverse of "JavaScript" is "${reverseStr("JavaScript")}"`);

const students = [
  { name: "Aman", age: 21 },
  { name: "Bina", age: 22 },
  { name: "Anjali", age: 20 },
  { name: "Charlie", age: 23 },
  { name: "Arjun", age: 24 },
];

const aStudents = students.filter((s) => s.name.startsWith("A"));
console.log("Students whose name starts with 'A':");
aStudents.forEach((s) => console.log(`${s.name}, Age: ${s.age}`));

/*
OUTPUT:

Second largest in [45,12,89,33,89,67] is 67
"Programming" -> Vowels: 3, Consonants: 8
name: Harananda Loukrakpam
age: 20
university: Assam Down Town University (ADTU)
subjects: Data Science,AI,Web Development,Mathematics
hobbies: Riding motorcycles,Watching philosophical films,Coding
7 is Prime
15 is Not Prime
29 is Prime
1 is Not Prime
2 is Prime
Reverse of "JavaScript" is "tpircSavaJ"
Students whose name starts with 'A':
Aman, Age: 21
Anjali, Age: 20
Arjun, Age: 24
*/