// Example of Async code:

console.log(1);
console.log(2);

setTimeout(()=>{
    console.log('Callback Function fired!');
}, 2000);

// This code is no longer blocked!
console.log(3);
console.log(4);