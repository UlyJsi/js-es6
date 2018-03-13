// const sayHello = function() {
//   console.log("hello");
// }

// const sayHello = () => {
//   console.log("hello");
// }

// const sayHello = () => console.log("hello");

// return object
//const sayHello = () => ({msg: "Hello"}); // without () would be undefined because { is treated as a body }

// single param doesn't need (), multiple - do need
// const sayHello = name => console.log(`Hello ${name}`);

// sayHello("Simple name");

const users = ["Nathan", "John", "William"];
// shorter
const nameLength = users.map((name) => {
  return name.length;
});
// shortest
const nameLength = users.map(name => name.length);
console.log(nameLength);