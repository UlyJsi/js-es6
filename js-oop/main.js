
// object prototype

function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);
  this.getAge = function() {
    return (new Date().getFullYear() - this.birthday.getFullYear());
  }
}

const john = new Person("John", "Kowal", "9-02-1993");
const mary = new Person("Mery", "Johnson", "02-06-1967");

console.log(mary);