// Tutorial 6: Add resource parameter
const getTodos = (resource, callback) => {
    const request = new XMLHttpRequest();  // create request object

    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(text=request.responseText);
            callback(undefined, data);
        } else if (request.readyState === 4) { // could chuck on... && status != 200
            // Here we'd have the error but no data
            callback('Could not fetch data', undefined);
        }
    });

    request.open(method='GET', url=resource);
    request.send();
}

// Get todos for Luigi, then when that is done do it for Mario, then do it for Shaun
// This is callback hell as we are nesting callback inside callback inside callback:
// Extremely unreadable especially if getTodos() was more complicated
// Hence we use promises! Next video...
getTodos(resource="todos/luigi.json", callback=(err, data)=>{
    console.log(data);
    getTodos(resource="todos/mario.json", callback=(err, data)=>{
        console.log(data);
        getTodos(resource="todos/shaun.json", callback=(err, data)=>{
            console.log(data);
        })
    })
});
