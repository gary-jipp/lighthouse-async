// If there are "primitive" values, that implies there are "non-primitive" values'
// These are called Objects, in JavaScript

// A classic JavaScript Object
const bruno = {
  name: "bruno",
  breed: "mix",
  size: "small",
  age: 5
};
console.log(bruno);

// Arrays are also Objects
const friends = [
  "Alice",
  "Carol",
  "Bob",
  "Mallory"
];
console.log(friends);

// How do we know arrays are also objects?
// They they have keys/values
console.log(friends.length);

// Arrays and Objects are both non-primitive. They can be Mutated (Changed)
bruno.toy = "Sqeeky Ball";
console.log(bruno);

friends.push("Ted");
console.log(friends);

// "const" variables, so we did not replace the object, we modified it (mutate)