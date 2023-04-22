// We  Functions in JavaScript are Also Objects
// First Class, Higher Order etc
// Just means they are objects and can be treated as Objects

// The newer way to declare a function is like this
let sayHello = function(name) {
  console.log("Hello", name);
};


// If a Function is an Object, we should be able to do This
sayHello.value1 = "Alice";
sayHello.value2 = 5;

console.log(sayHello);
sayHello("Bob");
console.log(sayHello.value1);

// Because functions Are Objectsm that means they are also values
// We know, because variables hold values;
// We  assign the "value" of the functio to any other  variable

const copyOfFunction = sayHello;
console.log(copyOfFunction);

// We can then use that variable like we would any function
// What do we commonly do with functions?   We call them!
sayHello("Mallory");

copyOfFunction("Mary");

// We can continue this.  the function is just a value
const anotherCopy = copyOfFunction;
copyOfFunction("Ted")

// Functions are values.   We can treat them like any other value