console.log(x);
var x = 5;
console.log(x);

try {
  console.log(y);
  let y = 10;
} catch (err) {
  console.log("Error caught: " + err.message);
}

try {
  const z = 100;
  z = 200;
} catch (err) {
  console.log("Error caught: " + err.message);
}

console.log(`
var:
  - Function-scoped (not block-scoped)
  - Can be re-declared and updated
  - Hoisted and initialized with 'undefined'

let:
  - Block-scoped
  - Can be updated but NOT re-declared in the same scope
  - Hoisted but stays in the "Temporal Dead Zone" until the declaration line

const:
  - Block-scoped
  - Cannot be updated or re-declared (must be initialized at declaration)
  - Object/array contents referenced by const CAN still be mutated,
    only reassignment of the variable itself is blocked
`);

/*
OUTPUT:

undefined
5
Error caught: Cannot access 'y' before initialization
Error caught: Assignment to constant variable.

var:
  - Function-scoped (not block-scoped)
  - Can be re-declared and updated
  - Hoisted and initialized with 'undefined'

let:
  - Block-scoped
  - Can be updated but NOT re-declared in the same scope
  - Hoisted but stays in the "Temporal Dead Zone" until the declaration line

const:
  - Block-scoped
  - Cannot be updated or re-declared (must be initialized at declaration)
  - Object/array contents referenced by const CAN still be mutated,
    only reassignment of the variable itself is blocked
*/