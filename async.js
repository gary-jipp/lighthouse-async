// JavaScript is non-preemtive, single threaded
// Anything that takes "any" time at all should be async

// Lets start with our sayHello Function again
const sayHello = function(name) {
  console.log("Hello", name);
};


// setTimeout is a async function. Takes 2 parameters
setTimeout(sayHello, 2000);

// what happened here?  setTimeout calls sayHello  with no parameters
// You can actually send more params to the setTimeout callback if you want
// But the callback function has to know what to do with it
setTimeout(sayHello, 2000, "Bob");
