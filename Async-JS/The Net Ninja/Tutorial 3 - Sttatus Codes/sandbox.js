const request = new XMLHttpRequest();  // create request object

request.addEventListener('readystatechange', () => {
    if (request.readyState === 4 && request.status === 200) {
        console.log('Data received');
        console.log(request.responseText);
    } else if (request.readyState === 4) { // could chuck on... && status != 200
        console.log('Could not fetch the data');
    }
});

request.open(method='GET', url='https://jsonplaceholder.typicode.com/todos/'); 
request.send();