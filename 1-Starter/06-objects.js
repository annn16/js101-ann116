/* 
## Objects #6

1. create car object
2. add make, model, year, colors (array),
   hybrid (boolean) keys
3. add two methods (drive and stop)
4. in the function body setup log with random text
5. log make
6. log first color
7. invoke both methods

*/

let car = {
  make: "USA",
  model: "Ford Everest",
  year: 1998,
  color: ["red", "yellow", "green", "black"],
  hybrid: false,
  drive() {
    console.log("Hi this is drive");
  },
  stop() {
    console.log("Hi this is STOP");
  },
};

console.log(car.make);
console.log(car.color[0]);
car.drive();
car.stop();
