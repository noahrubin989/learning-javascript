// DOM Manipulation

const title = document.querySelector('#main-heading');


// ========== A. Inline Styling ==========
// Now style using some CSS (inline styling)
title.style.color = 'red';
title.style.fontFamily = 'Arial';

// Style properties have now been added
// console.log(title);
// console.log(typeof title);

// ========== B. Inline Styling - Mutiple Elements ==========
// Can't use inline strategy it on multiple elements
const listItems = document.querySelectorAll('.list-items');
// listitems.style.fontSize = '2rem';  // no good

// Solution: Loop through the items
for (i = 0; i < listItems.length; i++) {
    listItems[i].style.fontSize = '2rem';
}

// ========== C. Creating Elements: Intro ==========
const myUl = document.querySelector('ul');
const newLi = document.createElement('li');

// Insert into document
myUl.append(newLi);

// Modifying the text
// const firstLi = document.querySelector('.list-items');
// console.log(firstLi.innerText);  // displays text
// console.log(firstLi.textContent);  // considers indentation
// console.log(firstLi.innerHTML);   // shows indentation AND html tags

// Modify Text
newLi.innerText = 'Cricket';
