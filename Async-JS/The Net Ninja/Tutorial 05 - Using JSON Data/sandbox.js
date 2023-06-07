const getTodos = (callback) => {
    const request = new XMLHttpRequest();  // create request object

    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            // This is what happens when successful so the error is obviously undefined and so we only pass in the data parameter
            // TUTORIAL 5:
            const data = JSON.parse(text=request.responseText);
            callback(undefined, data);
        } else if (request.readyState === 4) { // could chuck on... && status != 200
            // Here we'd have the error but no data
            callback('Could not fetch data', undefined);
        }
    });

    request.open(method='GET', url='todos.json'); // Tutorial 5
    request.send();
}

console.log(1);
console.log(2);

// This code then starts but it does not get in the way of `console.log(3)` and `console.log(4)`
// This is the beating heart of async in JS
getTodos(callback=(err, data)=>{
    console.log('Callback function fired');
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

console.log(3);
console.log(4);