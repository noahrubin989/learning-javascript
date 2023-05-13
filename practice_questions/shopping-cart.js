/*
Create an object that represents a shopping list, with methods such  
as addItem and removeItem that allow you to add and remove items from the list.
*/

const shoppingList = {
    'items': [],
    'addItem': function(item) {
        if (!this['items'].includes(item)) {
            // add item to the list
            this['items'].push(item);
        } else {
            console.log(`'${item}' already in the list`)
        }
    },
    'removeItem': function(item) {
        if (this['items'].includes(item)) {
            // remove the item from the list
            this['items'] = this['items'].filter(word => word !== item);
        } else {
            console.log(`'${item}' not in the list`);
        }
    },
    'getNumItems': function() {
        return this['items'].length;
    },
    'showItems': function() {
        return this['items'];
    }  
};


let myList = Object.create(shoppingList);

// add some items
myList.addItem('Bread');
myList.addItem('Milk');
myList.addItem('Chicken');
myList.addItem('Crackers');
myList.addItem('Jam');

// remove some items 
myList.removeItem('Milk');
myList.removeItem('Jam');

// try remove an item that does not exist
myList.removeItem('Butter');

// try to push an item already in the list
myList.addItem('Bread');

// check items and the overall count
console.log(`Items: ${myList.showItems()}`);
console.log(`Number of items: ${myList.getNumItems()}`);





