/* 
Both callbacks and promises help make our code asynchronous. 
Making callbacks async can cause issues such as callback hell, so to avoid this we can use promises instead, doing this helps us avoid this pitfall while keeping our code async and neat. 
*/

const posts = [
    {
        title: 'Post One',
        body: 'This is post one'
    },
    {
        title: 'Post Two',
        body: 'This is post two'
    },
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((p) => {
            output += `<li>${p.title}</li>`;
        });
        document.getElementById('posts-container').innerHTML = output;
    }, 1000);
}

// Here we will explore the concept of promises
function createPostImproved(p) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(p);
            const error = false;  // in practice you'd run some error checking
            if (!error) {
                resolve();
            } else {
                reject('Error, something went wrong!');
            }
        }, 2000);
    });
}

// Can use `then` method
let newpost = {title: 'Post Three', body: 'This is post three'};
createPostImproved(newpost).then(getPosts);
