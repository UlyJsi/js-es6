// storage controller

//////////////////// Item controller
const ItemCtrl = (function() {
  // item constructor
  const Item = function(id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  }
  // data structure / state
  const data = {
    items: [
      {id: 0, name: "Steak Dinner", calories: 1200},
      {id: 1, name: "Cookie", calories: 400},
      {id: 2, name: "Eggs", calories: 300}
    ],
    currentItem: null,
    totalCalories: 0
  }
  // public
  return {
    getItems: function() {
      return data.items;
    },
    addItem: function(name, calories) {
      // create dynamic id's
      let ID;
      if (data.items.length > 0) {
        ID = data.items[data.items.length-1].id + 1;
      } else {
        ID = 0;
      }
      // convert "calories" to number
      calories = parseInt(calories);
      // create new item
      newItem = new Item(ID, name, calories);
      // push new item to data array
      data.items.push(newItem);
      return newItem;
    },
    logData: function() {
      return data;
    }
  }
})();






//////////////////// UI controller
const UICtrl = (function() {
  // dynamic UI selectors
  const UISelectors = {
    itemList: "#item-list",
    addBtn: ".add-btn",
    itemNameInput: "#item-name",
    itemCaloriesInput: "#item-calories"
  }
  console.log("test");
  // public
  return {
    populateItemList: function(items) {
      let html = "";
      items.forEach(item => {
        html += `
        <li id="item=${item.id}" class="collection-item">
          <strong>${item.name}: </strong> <em>${item.calories} calories</em>
          <a href="#" class="secondary-content">
            <i class="edit-item fa fa-pencil"></i>
          </a>
        </li>`;
      });
      // insert list items
      document.querySelector(UISelectors.itemList).innerHTML = html;
    },
    getItemInput: function() {
      return {
        name: document.querySelector(UISelectors.itemNameInput).value,
        calories: document.querySelector(UISelectors.itemCaloriesInput).value
      }
    },
    addListItem: function(item) {
      // create li element
      const li = document.createElement("li");
      li.className = "collection-item";
      // add ID
      li.id = `item-${item.id}`;
      // add html
      li.innerHTML = `
        <strong>${item.name}: </strong> <em>${item.calories} calories</em>
        <a href="#" class="secondary-content">
          <i class="edit-item fa fa-pencil"></i>
        </a>`;
      // insert item
      document.querySelector(UISelectors.itemList).insertAdjacentElement("beforeend", li);
    },
    clearInputs: function() {

    },
    getSelectors: function() {
      return UISelectors;
    }
  }
})();





/////////////////// App controller 
const AppCtrl = (function(ItemCtrl, UICtrl) {
  // events
  const loadEventListeners = function() {
    const UISelectors = UICtrl.getSelectors();
    // add item event
    document.querySelector(UISelectors.addBtn).addEventListener("click", itemAddSubmit);
  }
  // add itemAddSubmit()
  const itemAddSubmit = function(e) {
    // get form input from UICtrl
    const input = UICtrl.getItemInput();
    // check for non empty input and calories inputs
    if (input.name !== "" && input.calories !== "") {
      // add item
      const newItem = ItemCtrl.addItem(input.name, input.calories);
      // add item to UI
      UICtrl.addListItem(newItem);
      // clear inputs
      UICtrl.clearInputs();
    }
    e.preventDefault();
  }
  // public
  return {
    init: function() {
      // fetch items from data structure
      const items = ItemCtrl.getItems();
      // populate list with items - associate items with UI
      UICtrl.populateItemList(items);
      // load event listeners
      loadEventListeners();
    }
  }
})(ItemCtrl, UICtrl);


// init app
AppCtrl.init();