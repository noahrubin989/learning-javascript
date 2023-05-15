// DOM Manipulation

const myInput = document.getElementById('myinput');
myInput.setAttribute('value', 'New Text');

const newElement = document.createElement('div');
newElement.setAttribute('class', 'mydiv');
document.body.appendChild(newElement);  // add to the body

