// DOM Manipulation - TRAVERSAL BASICS

// ========== Parent Node Traversal ==========
let ul = document.querySelector('ul');
console.log(typeof ul);
console.log(ul);

// Climb up parent node in two different ways
console.log(ul.parentNode);  // first option
console.log(ul.parentElement);  // second option

// Can method chain to climb up again!
console.log(typeof ul.parentNode);
console.log(typeof ul.parentElement);

console.log(ul.parentNode.parentNode);  // first option
console.log(ul.parentElement.parentElement);  // second option

console.log(typeof ul.parentNode.parentNode);
console.log(typeof ul.parentElement.parentElement);

// ========== Child Node Traversal ==========

// Traverse through the list items
// Indentations are counted as text nodes!
console.log(ul.children);
console.log(ul.firstElementChild);
console.log(ul.lastElementChild);

// Style some elements
ul.firstElementChild.style.fontWeight = 'bold';
ul.children[2].style.textDecoration = 'underline';
ul.lastElementChild.style.color = 'blue';

// ========== Sibling Node Traversal ==========
const li = document.querySelector('.list-item');
console.log(li);
console.log(li.nextElementSibling);
console.log(li.nextElementSibling.previousElementSibling);

/* 
These examples cover some basic traversal operations. 
Remember that there are many other methods and properties 
available for DOM traversal, such as nextSibling, previousSibling, 
nextElementSibling, previousElementSibling, and more. These can help 
you navigate through the siblings and other related elements in the DOM tree. 
*/

