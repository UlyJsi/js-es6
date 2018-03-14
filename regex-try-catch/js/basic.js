//////////////  try - catch - finally /////////////////

// const user = {email: "ger@wge.pl"};
// try {
  // ReferenceError
  //myFunction();

  // TypeError
  // null.myFunction();

  // SyntaxError
  // console.log(eval("Hello world"));

  // URIError
  // decodeURIComponent("%");

//   if (!user.name) {
//     // throw "User has no name";
//     throw new SyntaxError("User has no name");
//   }
// } catch(e) {
//   console.log(`User error: ${e.message}`);
  // console.log(e);
  // console.log(e.message);
  // console.log(`${e.name}: Its a null !!!!`);
  // console.log(e instanceof ReferenceError);
// } finally {
//   console.log("Finally runs regardless of result");
// }
// console.log("Everything is going on still");
 

////////////// regex /////////////////

let re;
re = /hello/;
re = /hello/i; // i - case insensitive
// re = /hello/g; // global search

// exec() - return results in a array or null
// const result = re.exec("test hellodfgdfgfhhello world");
// console.log(result);
// console.log(result[0]); // hello
// console.log(result.index); // index: 5
// console.log(result.input); // test hellodfgdfgfhhello world

// test () - returns true or false
// let result = re.test("Hello"); // false
// result = re.test("Hello"); // true with "/hello/i"
// console.log(result);

// match() - returns result array or null
// const str = "Hello there";
// const result = str.match(re);
// console.log(result);

// search() - return index of the first match - if not found returns -1
// const str = "Hello world";
// const result = str.search(re);
// console.log(result);

// // replace() - return new string with some or all matches of pattern
// const str = "Hello world";
// const newStr = str.replace(re, "Hi");
// console.log(newStr);