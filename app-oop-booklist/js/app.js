// book constructor

function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI constructor

function UI() {}
// add book to list
UI.prototype.addBookToList = function(book) {
  const list = document.getElementById("book-list");
  // create tr element
  const row = document.createElement("tr");
  // insert cols
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
  `
  list.appendChild(row);
} 

// show alert
UI.prototype.showAlert = function(message, className) {
  const div = document.createElement("div");
  div.className = `alert ${className}`;
  div.appendChild(document.createTextNode(message));
  const container = document.querySelector(".container");
  const form = document.querySelector("#book-form");
  container.insertBefore(div, form);
  // timeout
  setTimeout(function() {
    document.querySelector(".alert").remove();
  }, 3000);
}

// delete book 
UI.prototype.deleteBook = function(target) {
  if (target.className === "delete") {
    // remove parent = tr
    target.parentElement.parentElement.remove();
    // alert success
    const ui = new UI();
    ui.showAlert("Book removed!", "success");
  }
}
// clear fields

UI.prototype.clearFields = function() {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("isbn").value = "";
}

// event listener for add book

document.getElementById("book-form").addEventListener("submit", function(e) {
  // get form values
  const title = document.getElementById("title").value,
        author = document.getElementById("author").value,
        isbn = document.getElementById("isbn").value;

  // instantiate a new book
  const book = new Book(title, author, isbn);
  // instantiate a new UI
  const ui = new UI();

  // validate
  if (title === "" || author === "" || isbn === "") {
    // error handlig
    ui.showAlert("Please, fill in all fields", "error");
  } else {
  ui.addBookToList(book);
  // clear fields
  ui.clearFields();
  ui.showAlert("Book added!", "success");
  }

  e.preventDefault();
});

// event listener for delete book from list

document.getElementById("book-list").addEventListener("click", function(e) {
  const ui = new UI();
  ui.deleteBook(e.target);
  e.preventDefault();
});