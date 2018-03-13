document.getElementById("button1").addEventListener("click", getText);
document.getElementById("button2").addEventListener("click", getJSON);
document.getElementById("button3").addEventListener("click", getApiData);

// fetch from local text file
function getText() {
  fetch("test.txt")
    .then(res => res.text())
    .then(data => {
      console.log(data);
      document.getElementById("output").innerHTML = data + "from a test.txt file.";
    })
    .catch(err => console.log(err));
}
// fetch from local json file
function getJSON() {
  fetch("posts.json")
    .then(res => res.json())
    .then(data => {
      console.log(data);
      let output = "";
      data.forEach(post => {
        output += `<li>${post.title}</li>`;
      });
      document.getElementById("output").innerHTML = output;
    })
    .catch(err => console.log(err));
}
// fetch from external API
function getApiData() {
  fetch("https://api.github.com/users")
    .then(res => res.json())
    .then(data => {
      console.log(data);
      let output = "";
      data.forEach(user => {
        output += `<li>GitHub user login: ${user.login}</li>`;
      });
      document.getElementById("output").innerHTML = output;
    })
    .catch(err => console.log(err));
}