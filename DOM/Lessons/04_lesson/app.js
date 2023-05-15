// DOM: classList property

const paragraph = document.querySelector('#opening-paragraph');
// console.log(paragraph.classList);

// use add method and remove method
paragraph.classList.add('bold', 'big-font');
paragraph.classList.remove('bold');

// replace big font with a lime background
paragraph.classList.replace(token='big-font', newtoken='lime-bg');

// toggle: remove if it exists, add if it does not
paragraph.classList.toggle('lime-bg');  // remove since it is present
paragraph.classList.toggle('lime-bg');  // add since it is not present 

// See if the paragraph contains the class 'blue-text'
console.log(paragraph.classList.contains(token='blue-text'));  // inspect html => returns false

// This will return true
console.log(paragraph.classList.contains(token='lime-bg'));  // inspect html => returns false
