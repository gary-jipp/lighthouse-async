let sayHello = function(name) {
  console.log("Hello", name);
};

const plus1 = function(num) {
  console.log(`${num}++ =`, num++);
};

// If we send the sayHello to a functon that expects a function as a parameter
const callThisFunction = function(theFunction) {
  // maybe do some stuff
  theFunction("Alice");
};

// callThisFunction knows that its going to get a function that expects a string
callThisFunction(sayHello);

// if we give callThisFunction a function that expects something else:
callThisFunction(plus1);

// or worse:
// callThisFunction("Alice");
