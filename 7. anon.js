
const sayHello = function(name) {
  console.log("Hello", name);
};

// We can send the function  parameter as a variable
const callThisFunction = function(theFunction) {
  theFunction("Alice");
};

// Lets look again at the functional expression
// const sayHello = function(name)

// Notice the = between these two expressions/
// They are "equal". That means they are interchangable

// So we can do this
callMyFunction(sayHello);

// or this
callMyFunction(function(name) {console.log("Hello", name);});

// We are passing an 'anonymous' function (has no name)
// Of course we almost always use Arrow functions

// Can remove the braces
// Don't need the () if only one param, but doesn't hurt to include them
callMyFunction((name) => console.log("Hello", name));

// If I pass a function that doesn't need a param, its just ignored.
callMyFunction(() => console.log("Hello"));
