//calling higher lever with anonymous function

const outerFunction = (callback) => {
  console.log(callback());
};

outerFunction(() => "this is a string");

//using a function to return functions

const addFactory = (x) => (y) => x + y;

const add5 = addFactory(5);
console.log(add5(20));

//ternary operator

let age = 27;

age > 30
  ? console.log("got to the singles ward")
  : console.log("Stay with us!");

age % 2 === 0 ? console.log("Even Stevens!") : console.log("Odd man out");
