// We can declare a function like this
// function sayHello(name) {
//   console.log(name);
// }

// The newer way to declare a function is like this
let sayHello = function(name) {
  console.log("Hello", name);
};

// This is called a Functional Expression rather than a function declaration
// variable = anonymous function
// This means we can use the variable in place of the function
sayHello("Mallory");

// This variable can be treated like any other variable, including used as a parameter
console.log(sayHello);  // this doesn't really do anything that interesting since console.log doesn't do anything but print whatever it gets
console.log(sayHello.toString());  // A little more interesting

// A function should know what its supposed to do with each parameter it gets
sayHello("My Name"); // sayHello knows that its getting a "String" and does whatever it does with strings

// for another function
const plus1 = function(num) {
  console.log(`${num}++ =`, num++);
};

plus1(3);   // Works because plus1 expects a number
plus1("Bob"); // plus1 does not expect a string
plus1(true); // plus1 does not expect a boolean (weird result?)
plus1(false); // plus1 does not expect a boolean (weird result?)
console.log(true + 1);    // Unexpected, right?
console.log(false + 1);   // Same..


// The author of the function plus1 probably (should have!) documented this fact
