
// object prototype

// function Person(firstName, lastName, dob) {
//   this.firstName = firstName;
//   this.lastName = lastName;
  // this.birthday = new Date(dob);
  // this.getAge = function() {
  //   return (new Date().getFullYear() - this.birthday.getFullYear());
  // }
// }

// Person.prototype.greeting = function() {
//   return `Hello ${this.firstName} ${this.lastName}`;
// }

// const personBet = new Person("jane", "doe");
// console.log(personBet.greeting());

// const john = new Person("John", "Kowal", "9-02-1993");
// const mary = new Person("Mery", "Johnson", "02-06-1967");

// console.log(mary);

// function Customer(firstName, lastName, phone, membership) {
//   Person.call(this, firstName, lastName);
//   this.phone = phone;
// }

// inherits prototyping from Person
// Customer.prototype = Object.create(Person.prototype);

// make Customer.prototype return Customer()
// Customer.prototype.constructor = Customer;

// Customer.prototype.greeting = function() {
//   return `Hello from Customer func ${this.firstName} ${this.lastName}`;
// }

// const newCust = new Customer("John", "Doe", "12334", true);

// console.log(newCust);
// console.log(newCust.greeting());

// object.create

// const differentPrototypes = {
//   greeting: function() {
//     return `Hello ${this.firstName} ${this.lastName}`;
//   },
//   getsMarried: function(newLastName) {
//     this.lastName = newLastName;
//   } 
// }

// const test = Object.create(differentPrototypes);

// test.firstName = "Test1";
// test.lastName = "Nazwisko";
// test.getsMarried("NewNazwisko");

// console.log(test.greeting());

// classes 

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  greeting() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const newPerson = new Person("Name", "Surname");

console.log(newPerson);