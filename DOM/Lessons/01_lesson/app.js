// DOM Manipulation

// getElementById()
const title = document.getElementById('main-heading');
console.log(title);
console.log(typeof title);

// getElementsByClassName()
const listItems = document.getElementsByClassName('list-items');
console.log(listItems);  // array of all the child elements
console.log(typeof listItems);

// getElementsByTagName()
const listItems2 = document.getElementsByTagName('li');
console.log(listItems2);  // array of all the child elements
console.log(typeof listItems2);

// querySelector()
/* 
returns the first Element within the document that matches the specified selector, 
or group of selectors. If no matches are found, null is returned.
*/
const container = document.querySelector('div');  // first div tag
console.log(container);
console.log(typeof container);

// querySelectorAll()
/* 
returns a static (not live) NodeList representing a list of the document's elements 
that match the specified group of selectors.
*/
const containers = document.querySelectorAll('div');  // all div tags
console.log(containers);
console.log(typeof containers);  // NodeList
