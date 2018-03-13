////////////////  old  ///////////////

// async function myFunc() { // async === return new Promise()
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Hello"), 1000);
//   });
//   const error = false;
//   if (!error) {
//     const res = await promise; // await until promise is resolved
//     return res;
//   } else {
//     await Promise.reject(new Error("Something went wrong."))
//   }
// }

// // without below line console.log(myFunc() will return new Promise as general, with .then - return myFunc value)
// myFunc()
// .then(res => console.log(res))
// .catch(err => console.log(err));



////////////////  new  ///////////////

async function getUsers() {
  // await response of the fetch call
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  // only proceed once its resolved
  const data = await response.json();
  // only proceed once second promise id resolved
  return data;
}

getUsers().then(users => console.log(users));