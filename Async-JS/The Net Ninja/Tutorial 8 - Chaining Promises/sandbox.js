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

myPromise.then(data => {
    console.log('Luigi data retrieved successfully', data);
    return getTodos('todos/mario.json');
}).then(data => {
    console.log('Mario data retrieved successfully', data);
    return getTodos('todos/shaun.json');
}).then(data => {
    console.log('Shaun data retrieved successfully', data);
}).catch(err => {
    console.log('There was an error and hence the promise is rejected', err);
});
