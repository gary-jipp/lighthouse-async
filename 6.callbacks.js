let sayHello = function(name) {
  console.log("Hello", name);
};

sayHello("Alice")

sayHello;


// Its a value. That means we can use it as a parameter to any other function
const callMyFunction = function(theFunction) {

  console.log(theFunction);
  console.log(theFunction.toString());

  theFunction("Alice");
};

// callThisFunction knows that its going to get a function that expects a string
callMyFunction(sayHello);


const plus1 = function(num) {
  console.log(`${num}++ =`, num++);
};

// if we give callThisFunction another function that expects something else:
// callMyFunction(plus1);

// or worse:
// callThisFunction("Alice");
