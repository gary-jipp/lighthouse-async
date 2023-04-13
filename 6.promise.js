

// Create a promise - these are not so easy
const wait = function(seconds) {
  const promise = new Promise((resolve, reject) => {
    if (seconds < 0) {
      reject("cannot be less than zero");
    }

    setTimeout(() => {
      resolve("done");
    }, seconds * 1000);
  });

  return promise;
};

wait(4)
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  });


// Use a promise - these are pretty easy
console.log("End of main thread");
