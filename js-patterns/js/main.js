////////// MODULE PATTERN //////////////

// (function() {
  // declare private vars and functions
   //return {
     // declare public vars and funcs
   //}
//})();

// const UICtrl = (function() {
     // private
//   let text = "Hello world!";
//   const changeText = function() {
//     const element = document.querySelector("h1");
//     element.textContent = text;
//   }
     // public
//   return {
//     callChangeText: function() {
//       changeText();
//       console.log(text);
//     }
//   }
// })();

// UICtrl.callChangeText(); // can access only return funcs


// revealing module pattern
// const ItemCtrl = (function() {
//   let data = [];

//   function add(item) {
//     data.push(item);
//     console.log("Item added");
//   }

//   function get(id) {
//     return data.find(item => {
//       return item.id === id;
//     });
//   }

//   return {
//     add: add,
//     get: get
//   }
// })();

// ItemCtrl.add({id: 1, name: "John"});
// console.log(ItemCtrl.get(1));








////////// SINGLETON PATTERN //////////////

// const Singleton = (function() {
//   let instance;

//   function createInstance() {
//     const object = new Object({name: "Ulyana"});
//     return object;
//   }

//   return {
//     getInstance: function() {
//       if (!instance) {
//         instance = createInstance();
//       }
//       return instance;
//     }
//   }
// })();

// const instanceA = Singleton.getInstance();
// const instanceB = Singleton.getInstance();

// console.log(instanceA === instanceB); // true







///// FACTORY PATTERN (to create multiple objects) /////

// function MemberFactory() {
//   this.createMember = function(name, type) {
//     let member;

//     if (type === "simple") {
//       member = new SimpleMembership(name);
//     } else if (type === "standard") {
//       member = new StandardMembership(name);
//     } else if (type === "super") {
//       member = new SuperMembership(name);
//     }
//     member.type = type;
//     member.define = function() {
//       console.log(`${this.name} (${this.type}): ${this.cost}`)
//     }
//     return member;
//   }
// }

// const SimpleMembership = function(name) {
//   this.name = name;
//   this.cost = "50$";
// }

// const StandardMembership = function(name) {
//   this.name = name;
//   this.cost = "75$";
// }

// const SuperMembership = function(name) {
//   this.name = name;
//   this.cost = "100$";
// }

// const members = [];
// const factory = new MemberFactory();

// members.push(factory.createMember("John Doe", "simple"));
// members.push(factory.createMember("Person 2", "standard"));
// members.push(factory.createMember("Jane Gel", "super"));
// members.push(factory.createMember("John Doe", "simple"));
// console.log(members);

// members.forEach(member => {
//   member.define();
// });







/////////// OBSERVER PATTERN ///////////

// class EventObserver {
//   constructor() {
//     this.observers = [];
//   }

//   subscribe(func) {
//     this.observers.push(func);
//     console.log(`You are subscribe ${func.name}`);  
//   }

//   unsubscribe(func) {
//     this.observers = this.observers.filter(function(item){
//       if (item !== func) {
//         return item;
//       }
//     });
//     console.log(`You are now unsubscribe from ${func.name}`);
//   }

//   fire() {
//     this.observers.forEach(observer => {
//       observer.call();
//     });
//   }
// }

// const click = new EventObserver();
// event listeners
// document.querySelector(".sub-ms").addEventListener("click", function() {
//   click.subscribe(getCurMiliSec);
// });
// document.querySelector(".unsub-ms").addEventListener("click", function() {
//   click.unsubscribe(getCurMiliSec);
// });
// document.querySelector(".sub-s").addEventListener("click", function() {
//   click.subscribe(getCurSec);
// });
// document.querySelector(".unsub-s").addEventListener("click", function() {
//   click.unsubscribe(getCurSec);
// });
// document.querySelector(".fire").addEventListener("click", function() {
//   click.fire();
// });

// click handler
// const getCurMiliSec = function() {
//   console.log(`Current miliseconds: ${new Date().getMilliseconds()}`);
// }

// const getCurSec = function() {
//   console.log(`Current seconds: ${new Date().getSeconds()}`);
// }






/////////// MEDIATOR PATTERN - chatroom ///////////

// const User = function(name) {
//   this.name = name;
//   this.chatroom = null;
// }

// User.prototype = {
//   send: function(message, toWhoom) {
//     this.chatroom.send(message, this, toWhoom);
//   },
//   receive: function(message, fromWhoom) {
//     console.log(`${fromWhoom.name} to ${this.name}: ${message}`);
//   }
// }

// const ChatRoom = function() {
//   let users = {}; // list of users

//   return {
//     register: function(user) {
//       users[user.name] = user;
//       user.chatroom = this;
//     },
//     send: function(message, fromWhoom, toWhoom) {
//       if (toWhoom) {
//         // single user message
//         toWhoom.receive(message, fromWhoom);
//       } else {
//         // mass message
//         for (key in users) {
//           if (users[key] !== fromWhoom) {
//             users[key].receive(message, fromWhoom);
//           }
//         }
//       }
//     }
//   }
// }

// const user1 = new User("User 1");
// const user2 = new User("User 2");
// const user3 = new User("User 3");

// const chatroom = new ChatRoom();

// chatroom.register(user1);
// chatroom.register(user2);
// chatroom.register(user3);

// user1.send("Hello user 2", user2);
// user2.send("Hello user 1", user1);
// user3.send("Hello everybody");






/////////// STATE PATTERN - redux ///////////

const PageState = function() {
  let currentState = new homeState(this);

  this.init = function() {
    this.change(new homeState());
  }
  this.change = function(state) {
    currentState = state;
  }
};

// home state
const homeState = function(page) {
  document.querySelector("#heading").textContent = null;
  document.querySelector("#content").innerHTML = `
    <div class="jumbotron">
      <h1 class="display-4">Hello, world!</h1>
      <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      <hr class="my-4">
      <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
      <p class="lead">
        <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
      </p>
    </div>
  `;
};

// about state
const aboutState = function(page) {
  document.querySelector("#heading").textContent = "About us";
  document.querySelector("#content").innerHTML = `
    <p>This is the about page</p>
  `;
}

// contact state
const contactState = function(page) {
  document.querySelector("#heading").textContent = "Contact us";
  document.querySelector("#content").innerHTML = `
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  `;
}

// instantiate pageState
const page = new PageState();
// init the first state
page.init();

// UI vars
const home = document.getElementById("home"),
      about = document.getElementById("about"),
      contact = document.getElementById("contact");
// add event listeners
home.addEventListener("click", ((e) => {
  page.change(new homeState);
  e.preventDefault();
}));
about.addEventListener("click", ((e) => {
  page.change(new aboutState);
  e.preventDefault();
}));
contact.addEventListener("click", ((e) => {
  page.change(new contactState);
  e.preventDefault();
}));

