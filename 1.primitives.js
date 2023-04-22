// variables can hold values
const a = 5;
let b = 2;
const pet = "dog";

// And we can do stuss with those values
console.log(pet, a);

// And what we "do" with the value depends on what kind of value it is
const c = a + b;
const d = b++;
let pets = pet + " bird";

console.log(pets, c, d);

// we can't do this
console.log(pets++);

// The above are all known as "Primitive Values"
// Numbers, Booleans, String
123;
12.34;
true;
false;
"I am a string";

// You cannot "mutate" (change the contents of) a Primitive value
// 5 = 4 // ??

// You can certainly change the value in a Variable, hence the name
// But primitive values are fixed.

// String is kind of a special case, but in JavaScript its treated like a primitive.
// ie:  you cannot "mutate" or change a string, can only create new ones
// This does not work.. really
console.log(pets++);
console.log(pets += "1");  // Even this!
