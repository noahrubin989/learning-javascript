// ========== 1. Combine arrays ==========
let combineArrays = (arr1, arr2) => [...arr1, ...arr2];

let combinedArray = combineArrays([1, 2], [3, 4]);
console.log(combinedArray);
console.log(typeof combinedArray);
console.log('\n');

// ========== 2. Copy array ==========
let copyArray = (arr1) => [...arr1];

let a1 = [1, 2];
let a2 = copyArray(a1);
a2.push(3)
console.log(a1, a2);  // different arrays
console.log('\n');

// ========== 3. Place characters in an array ==========
let stringToArray = (myString) => [...myString];
console.log(stringToArray('word'));
console.log('\n');






