// Async functions return a promise
const getTodos = async () => {
    
    // Can use await keyword rather than .then method
    // Great: https://youtu.be/CWjNefiE47Y?t=373
    const response = await fetch('todos/luigi.json');
    const data = await response.json();
    
    return data;
}

// WE ARE NOT ACTUALLY GETTING THE DATA HERE BECAUSE OF THE ASYNC KEYWORD AT THE BEGINNING OF THE FUNCTION
// WE ARE INSTEAD RETURNING A PROMISE
const myPromise = getTodos();

// Get the JSON
// Also, recall that this code is non blocking!

console.log(1);
console.log(2);

// Can really stall this operation to take 10 seconds to see the asynchronous nature of all of this
myPromise.then(
    data => {
        console.log(data);
    }
).catch(
    err => {
        console.log(err);
    }
)

console.log(3);
console.log(4);
