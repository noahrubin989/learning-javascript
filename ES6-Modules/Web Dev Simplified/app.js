/*
Module import order: 
+ In app.js, it is generally a good practice to import default exports before named exports. This improves code readability.
+ Default export import first, followed by named exports:

Further explanation here:
+ https://stackoverflow.com/questions/33611812/export-const-vs-export-default-in-es6
*/

import U, { printAge, printFullName } from './modules/user.js';  // default exports can be aliased!

const person = new U('Noah', 'Rubin', 21);  // default exports can be aliased!
console.log(person);
console.log(`First Name: ${person.first}`);
console.log(`Last Name: ${person.last}`);
console.log(`Age: ${person.age}`);
printFullName(person);
printAge(person);
