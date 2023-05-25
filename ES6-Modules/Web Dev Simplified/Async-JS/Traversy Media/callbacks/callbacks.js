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
    // Mimicking retrival of data from an external source which might take 1s (hence we can set a 1s deliberate delay)
    setTimeout(() => {
        let output = '';
        posts.forEach((p) => {
            output += `<li>${p.title}</li>`;
        });
        document.getElementById('posts-container').innerHTML = output;
    }, 1000);
}

function createPost(p) {
    setTimeout(() => {
        posts.push(p)
    }, 2000);
}

// getPosts();

// let newpost = {title: 'Post 3', body: 'This is post three'};
// createPost(newpost);

// ===== Why don't we see this new post??? =====
/*
+ The createPost() took longer than the getPosts() (ie 1s vs 2s)
+ By the time we ran createPost() the DOM was already painted
*/

// ===== The fix??? =====
/*
+ Create insert a callback as a parameter (I'll call it myCallback)
*/
function createPostImproved(p, myCallback) {
    setTimeout(() => {
        posts.push(p);
        myCallback();  // a function to run
    }, 2000);
}

getPosts();
let newpost = {title: 'Post Three', body: 'This is post three'};
createPostImproved(newpost, getPosts);

/*
Summary:
+ The code demonstrates how asynchronous operations can be handled using callbacks. 
+ By using callback functions, we can control the order of execution and ensure that certain actions occur only after specific asynchronous operations are completed.
*/