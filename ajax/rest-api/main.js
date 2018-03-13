const posts = [
  {title: "post 1", body: "This is post one."},
  {title: "post 2", body: "This is post two."}
]

//////////// ES5 - callback ////////////////

// function createPost(post, callback) {
//   setTimeout(function() {
//     callback();
//     posts.push(post);
//   }, 2000);
// }
// function getPosts() {
//   setTimeout(function() {
//     let output = "";
//     posts.forEach(function(post) {
//       output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }
// createPost({title: "Post 3", body: "This is a post 3."}, getPosts);

//////////// ES6 - promises ////////////////

// function createPost(post) {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       posts.push(post);
//       const error = false;
//       if (!error) {
//         resolve();
//       } else {
//         reject("ERROR: something went wrong.");
//       }
//     }, 2000);
//   });
// }
// function getPosts() {
//   setTimeout(function() {
//     let output = "";
//     posts.forEach(function(post) {
//       output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }
// createPost({title: "Post 3", body: "This is a post 3."}).then(getPosts).catch(function(err) {
//   console.log(err);
// });










//////////// custom HTTP library - ES5 ////////////////

// https://jsonplaceholder.typicode.com/

// const http = new easyHTTP();
// func to pass in all methods below
// function logResponse(err, post) {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(post);
//   }
// }

// GET ALL POSTS
// http.get("https://jsonplaceholder.typicode.com/posts", function(err, posts) {
// logResponse(err, posts);
// });

// GET ONE POST
// http.get("https://jsonplaceholder.typicode.com/posts/1", function(err, post) {
// logResponse(err, post);
// });

// POST 
//const data = {title: "Custom post", body: "Body of a custom post"};
// create post 
// http.post("https://jsonplaceholder.typicode.com/posts", data, function(err, post) {
//  logResponse(err, post);
// });

// PUT - update
// http.put("https://jsonplaceholder.typicode.com/posts/5", data, function(err, post) {
//   logResponse(err, post);
// })

// DELETE
// http.delete("https://jsonplaceholder.typicode.com/posts/1", function(err, response) {
//   logResponse(err, response);
// });




//////////// custom HTTP library - ES6 ////////////////

const http = new EasyHttp();

// GET
// http.get("https://jsonplaceholder.typicode.com/users")
// .then(data => console.log(data))
// .catch(err => console.log(err));

// POST
const data = {
  name: "John Doe",
  username: "Login",
  email: "hgfdhs@hjcdf.com"
}
// http.post("https://jsonplaceholder.typicode.com/users", data)
// .then(data => console.log(data))
// .catch(err => console.log(err));

// PUT - update
// http.put("https://jsonplaceholder.typicode.com/users/2", data)
// .then(data => console.log(data))
// .catch(err => console.log(err));

// DELETE - update
http.delete("https://jsonplaceholder.typicode.com/users/2")
.then(data => console.log(data))
.catch(err => console.log(err));
