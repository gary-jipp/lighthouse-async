// Lets trace what happens with this code in the main thread
console.log("Start of main thread");

const sayHello = function(name) {
  console.log("Hello", name);
};

console.log("setTimeout - 500");
setTimeout(sayHello, 500);

console.log("setTimeout - 1000");
setTimeout(sayHello, 1000, "Bob");

console.log("setTimeout - 1500");
setTimeout(function() {
  console.log("Hello, no param needed");
}, 1500);

console.log("setTimeout - 2000");
setTimeout((name) => {
  console.log("Hello with param,", name);
}, 2000, "Bob");

console.log("End of main thread");
