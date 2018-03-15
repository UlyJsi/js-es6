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
      // {id: 0, name: "Steak Dinner", calories: 1200},
      // {id: 1, name: "Cookie", calories: 400},
      // {id: 2, name: "Eggs", calories: 300}
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
    getItemById: function(id) {
      let found = null;
      // loops throught items
      data.items.forEach(item => {
        if (item.id === id) {
          found = item;
        }
      });
      return found;
    },
    updateItem: function(name, calories) {
      // calories to number
      calories = parseInt(calories);

      let found = null;
      data.items(item => {
        if (item.id === data.currentItem.id) {
          item.name = name;
          item.calories = calories;
          found = item;
        }
      });
      return found;
    },
    setCurrentItem: function(item) {
      data.currentItem = item;
    },
    getCurrentItem: function() {
      return data.currentItem;
    },
    getTotalCalories: function() {
      let total = 0;
      data.items.forEach(function(item) {
        total += item.calories;
      });
      // set total calories 
      data.totalCalories = total;
      return data.totalCalories;
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
    updateBtn: ".update-btn",
    deleteBtn: ".delete-btn",
    backBtn: ".back-btn",
    itemNameInput: "#item-name",
    itemCaloriesInput: "#item-calories",
    totalCalories: ".total-calories"
  }
  // console.log("test");
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
      // show the list
      document.querySelector(UISelectors.itemList).style.display = "block";
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
      document.querySelector(UISelectors.itemNameInput).value = "";
      document.querySelector(UISelectors.itemCaloriesInput).value = "";
    },
    addItemToForm: function() {
      document.querySelector(UISelectors.itemNameInput).value = ItemCtrl.getCurrentItem().name;
      document.querySelector(UISelectors.itemCaloriesInput).value = ItemCtrl.getCurrentItem().calories;
      UICtrl.showEditState();
    },
    hideList: function() {
      document.querySelector(UISelectors.itemList).style.display = "none";
    },
    showTotalCalories: function(totalCalories) {
      document.querySelector(UISelectors.totalCalories).textContent = totalCalories;
    },
    clearEditState: function() {
      UICtrl.clearInputs();
      document.querySelector(UISelectors.updateBtn).style.display = "none";
      document.querySelector(UISelectors.deleteBtn).style.display = "none";
      document.querySelector(UISelectors.backBtn).style.display = "none";
      document.querySelector(UISelectors.addBtn).style.display = "inline";
    },
    showEditState: function() {
      UICtrl.clearInputs();
      document.querySelector(UISelectors.updateBtn).style.display = "inline";
      document.querySelector(UISelectors.deleteBtn).style.display = "inline";
      document.querySelector(UISelectors.backBtn).style.display = "inline";
      document.querySelector(UISelectors.addBtn).style.display = "none";
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
    // disable submit on enter
    document.addEventListener("keypress", function(e) {
      if (e.keyCode === 13 || e.which === 13) {
        e.preventDefault();
        return false;
      }
    });
    // edit icon click event
    document.querySelector(UISelectors.itemList).addEventListener("click", itemEditClick);
    // update item event
    document.querySelector(UISelectors.updateBtn).addEventListener("click", itemUpdateSubmit);
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
      // get total calories
      const totalCalories = ItemCtrl.getTotalCalories();
      // ad total calories to UI
      UICtrl.showTotalCalories(totalCalories);
      // clear inputs
      UICtrl.clearInputs();
    }
    e.preventDefault();
  }

  // click edit 
  const itemEditClick = function(e) {
    if (e.target.classList.contains("edit-item")) {
      // get list item id
      const listId = e.target.parentNode.parentNode.id;
      // break into an array
      const listIdArr = listId.split("-");
      // get actual id 
      const id = parseInt(listIdArr[1]);
      // get item
      const itemToEdit = ItemCtrl.getItemById(id);
      // set current item
      ItemCtrl.setCurrentItem(itemToEdit);
      // add item to form
      UICtrl.addItemToForm();
    }
    e.preventDefault();
  }

  // item update submit
  const itemUpdateSubmit = function(e) {
    // get item input
    const input = UICtrl.getItemInput();
    // update item
    const updatedItem = ItemCtrl.updateItem(input.name, inpur.calories);
    e.preventDefault();
  }
  // public
  return {
    init: function() {
      // set initial state
      UICtrl.clearEditState();
      // fetch items from data structure
      const items = ItemCtrl.getItems();
      // check if any items
      if (items.length === 0) {
        UICtrl.hideList();
      } else {
        // populate list with items - associate items with UI
        UICtrl.populateItemList(items);
      }
      // get total calories
      const totalCalories = ItemCtrl.getTotalCalories();
      // ad total calories to UI
      UICtrl.showTotalCalories(totalCalories);
      // load event listeners
      loadEventListeners();
    }
  }
})(ItemCtrl, UICtrl);


// init app
AppCtrl.init();