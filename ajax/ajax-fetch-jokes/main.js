//////////// AJAX - basic functionality /////////

// document.getElementById("button").addEventListener("click", loadData);

//function loadData() {
  // create an xml object
  //const xml = new XMLHttpRequest();
  // open
  // xml.open("GET", "./data.txt", true);
  // console.log('readyState: ', xml.readyState);

  // used for loaders
  // xml.onprogress = function() {
  //   console.log(this.readyState); // 3 - proccessing data
  // }
  
  // xml.onload = function() {
  //   if (this.status === 200) {
  //     // console.log(this.responseText);
  //     document.getElementById("output").innerHTML = `<h1>${this.responseText}</h1>`
  //   }
  // }
  // no need to use if sure readyState === 4
  // xml.onreadystatechange = function() {
  //   console.log('READYSTATE : ', xml.readyState);
  //   if (this.status === 200 && this.readyState === 4) {
  //     console.log(this.responseText);
  //   }
  // }

//   xml.onerror = function() {
//     console.log("Errrror");
//   }

//   xml.send();
// }


//////////// JSON / AJAX - local files /////////

// fetch 1 customer
// document.getElementById("button1").addEventListener("click", loadCustomer);
// function loadCustomer(e) {
//   const xml = new XMLHttpRequest();
//   xml.open("GET", "./customer.json", true);
//   xml.onload = function() {
//     if (this.status === 200) {
      //console.log(this.responseText);
      // JSON.parse to use customer.id, customer.company, etc.
//       const customer = JSON.parse(this.responseText);
//       const output = `
//       <ul>
//         <li>ID: ${customer.id}</li>
//         <li>NAME: ${customer.name}</li>
//         <li>COMPANY: ${customer.company}</li>
//         <li>PHONE: ${customer.phone}</li>
//       </ul>
//       `;
//       document.getElementById("customer").innerHTML = output;
//     }
//   }
//   xml.send();
// }

// fetch many customers
// document.getElementById("button2").addEventListener("click", loadCustomers);
// function loadCustomers(e) {
//   const xml = new XMLHttpRequest();
//   xml.open("GET", "./customers.json", true);
//   xml.onload = function() {
//     if (this.status === 200) {
      //console.log(this.responseText);
      // JSON.parse to use customer.id, customer.company, etc.
//       const customers = JSON.parse(this.responseText);
//       let output = "";
//       customers.forEach(customer => {
//         output +=
//           `<ul>
//             <li>ID: ${customer.id}</li>
//             <li>NAME: ${customer.name}</li>
//             <li>COMPANY: ${customer.company}</li>
//             <li>PHONE: ${customer.phone}</li>
//           </ul>`;
//       });
//       document.getElementById("customers").innerHTML = output;
//     }
//   }
//   xml.send();
// }


//////////// Chuck Noris Jokes - external API /////////
// http://www.icndb.com/api/
//https://api.icndb.com/jokes/random + /4

document.querySelector(".get-jokes").addEventListener("click", getJokes);

function getJokes(e) {
  const number = document.querySelector("input[type='number']").value;
  const xml = new XMLHttpRequest();
  xml.open("GET", `http://api.icndb.com/jokes/random/${number}`, true);
  xml.onload = function() {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);
      let output = "";
      if (response.type === "success") {
        // value is actual array of jokes
        response.value.forEach(joke => {
          output += `<li>${joke.joke}</li>`;
        });
      } else {
        output += `<li>Something went wrong</li>`;
      }
      document.querySelector(".jokes").innerHTML = output;
    }
  }
  xml.send();
  e.preventDefault();
}




