const request = new XMLHttpRequest();  // create request object

request.addEventListener('readystatechange', () => {
    
    // console.log(request);
    // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
    // 1: OPENED, 2: HEADERS_RECIEVED, 3: LOADING, 4: DONE.
    // console.log(request.readyState);
    // console.log('\n');

    // if done then show the data
    if (request.readyState === 4) {
        console.log('Data received');
        console.log(request.responseText);
    } 
});

request.open(method='GET', url='https://jsonplaceholder.typicode.com/todos/');  // readystate 1 https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
request.send();  // readystate 2 https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState