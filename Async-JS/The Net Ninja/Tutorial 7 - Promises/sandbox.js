// Promises
const getTodos = (resource) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        // add event listener
        request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText);
                resolve(data);
            } else if (request.readyState === 4) {
                reject('Could not fetch data');
            }
        });

        request.open('GET', resource);
        request.send();
    });
};

let myPromise = getTodos('todos/luigi.json');

myPromise.then(onfulfilled=(data)=>{
    console.log('Promise resolved. Here is the data', data);  // gets the data since we utilised resolve(data) in line 10, where data is simply the responseText;
}).catch((err)=>{
        console.log('Promise rejected', err);
    }
);

// ====== Why the need for line 10? ======

/*
The resolve function in a promise doesn't return a value directly. It is used to transition the promise from the pending state to the fulfilled state, and the value passed as an argument to resolve becomes the resolved value of the promise.

In the case of resolve(true), it means that the promise will be fulfilled with the value true. This value will then be passed as an argument to the then callback or any subsequent promise handlers chained using then.

Here's an example to illustrate this:

```
const myPromise = new Promise((resolve, reject) => {
    resolve(true);
});

myPromise.then((value) => {
    console.log(value); // Output: true
});
```

In the example above, the promise is created with resolve(true), so it is immediately fulfilled with the value true. When the then callback is executed, the resolved value (true) is passed as an argument to the callback function, and it gets logged to the console.

So, you can certainly use resolve(true) if you want to fulfill a promise with the value true. The important thing is that the value you pass to resolve will be available as the resolved value for subsequent promise handlers.
*/