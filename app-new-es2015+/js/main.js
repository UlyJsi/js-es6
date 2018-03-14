// iterators

// function nameIterator(names) {
//   let nextIndex = 0;
//   return {
//     next: function() {
//       return nextIndex < names.length ? 
//       {value: names[nextIndex++], done: false} : 
//       {done: true}
//     }
//   }
// }
// const namesArr = ["Jack", "Kasia", "Mory"];
// const names = nameIterator(namesArr);
// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next());







// generators

// function* sayNames() {
//   yield "Jack";
//   yield "Kasia";
//   yield "Mike";
// }
// const name = sayNames();
// console.log(name.next());

// function* createIds() {
//   let index = 0;
//   while(true) {
//     yield index++;
//   }
// }
// const gen = createIds();
// console.log(gen.next().value);






// symbols

// const sym1 = Symbol();
// const sym2 = Symbol("sym2");
// // console.log(Symbol() === Symbol());
// // console.log((`Hello ${String(sym1)}`)); // toString() can be as well
// const KEY1 = Symbol();
// const KEY2 = Symbol("sym2");
// const myObj = {};
// myObj[KEY1] = "Prop1"; // will not iterate
// myObj[KEY2] = "Prop2"; // will not iterate
// myObj.key3 = "Prop3";
// myObj.key4 = "Prop4";
// // symbols are not enumerable in for .. in
// for (let i in myObj) {
//   console.log(`${i} : ${myObj[i]}`)
// }
// symbols are ignored by JSON.stringify






// dectructuring

// let a, b;
// [a, b] = [100, 200];
// rest pattern
// [a, b, ...rest] = [100, 200, 300, 400, 500];
// console.log(rest)

// ({a, b, ...rest} = {a: 100, b: 200, c: 300, d: 400});
// console.log(rest);
// const people = ["Hello", "Jane", "London"];
// const [person1, person2, person3] = people;
// console.log(person1, person2, person3);

// function getPeople() {
//   return ["Hello", "Jane", "London"];
// }

// let person1, person2, person3;
// [person1, person2, person3] = getPeople();
// console.log(person1, person2, person3);

// object destructuring
// const person = {
//   name: "John Doe",
//   age: 32,
//   city: "London",
//   gender: "Male", 
//   sayHello: function() {
//     console.log("Hello");
//   }
// }

// old ES5
// const name = person.name,
//       age = person.age,
//       city = person.city,
//       gender = person.gender;

// new ES6
// const {name, age, city} = person;
// console.log(name);







// ES6 Maps - key-value pairs - can use any types as a key or a value

// const map1 = new Map();
// set keys
// const key1 = "string",
//       key2 = {},
//       key3 = function() {};
// set map values by key
// map1.set(key1, "Value of key1");
// map1.set(key2, "Value of key2");
// map1.set(key3, "Value of key3");

// get values
//console.log(map1.get(key1));

// count values
// console.log(map1.size);

///////////////// for...of
// for(let [key, value] of map1) {
//   console.log(`${key} = ${value}`);
// }

// iterate keys only
// for(let key of map1.keys()) {
//   console.log(key);
// }

// iterate values only
// for(let value of map1.values()) {
//   console.log(value);
// }

////////////// forEach
// map1.forEach(function(value, key) {
//   console.log(`${key} = ${value}`);
// });

////////////// convert to arrays
// const keyVal = Array.from(map1);
// console.log(keyVal);
////////////// convert to array of values
// const valArr = Array.from(map1.values());
// console.log(valArr);







// ES Sets - store unique values of any type
const set1 = new Set();

// add value to set
set1.add(100);
set1.add("A hello");
set1.add({name: "John"});
set1.add(true);
set1.add(100); // doesn't add again

// const set2 = new Set([1,true,"string"]);

// get size/count
// console.log(set1.size);

// check for values
// console.log(set1.has(100)); // true
// console.log(set1.has({name: "John"})); // false, object !== object

// delete
// set1.delete(100);

// iterate
// for(let item of set1) {
//   console.log(item);
// }

////////////// convert to arrays - the same as maps



