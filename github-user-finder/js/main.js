// initialize Github and UI classes

const github = new Github();
const ui = new UI();

// search input + event listener
const searchUser = document.getElementById("search-user");
searchUser.addEventListener("keyup", (e) => {
  const userText = e.target.value;
  if (userText !== "") {
    // make http call - when typing -> fetch users with typed value
    github.getUser(userText) // from github.js
      .then(data => {
        if (data.profile.message === "Not Found") {
          // show alert
          ui.showAlert("User not found", "alert alert-danger");
        } else {
          // show profile
          ui.showProfile(data.profile);
          ui.showRepos(data.repos);
        }
      });
  } else {
    // clear profiles from ui class when input is ""
    ui.clearProfile();
  }
});