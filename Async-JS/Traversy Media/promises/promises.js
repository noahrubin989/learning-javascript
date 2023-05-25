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
            // Set to the boolean of true and observe what happens in the console
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
createPostImproved(newpost).then(getPosts).catch(err => console.log(err));


// Async / Await
async function init(myNewPost) {
    await createPostImproved(myNewPost);  // The await keyword is used to pause the execution of the function until the promise is resolved. 
    getPosts();  // Ensure the post has been created before getting all of them
}

let newestPost = {title: 'Post Four', body: 'This is post Four'};
init(newestPost);


// In this approach, you define an async function (init in this case) that allows you to use the await keyword within it. 
// The await keyword is used to pause the execution of the function until the promise is resolved. 
// So, when you call await createPostImproved(newpost), it will wait for the promise to be resolved before moving to the next line (getPosts()).

// Both approaches are valid and widely used. The choice between them depends on your personal preference and the specific requirements of your project. Here are a few considerations:

// Promises with .then() and .catch():

// Suitable for handling promises in a more explicit and chainable manner.
// Useful when you have multiple asynchronous operations that need to be executed in a specific sequence.
// Allows more fine-grained error handling with .catch().
// Async/await:

// Provides a more synchronous and straightforward way to write asynchronous code.
// Easier to read and understand, especially for developers who are more familiar with synchronous programming.
// Can simplify code structure and avoid excessive chaining of .then().
// Ultimately, it's a matter of preference and the specific requirements of your project. You can choose the approach that makes your code more readable and maintainable.


// To still learn:
// * Promise.all()

const promise1 = Promise.resolve('Value 1');
const promise2 = Promise.resolve('Value 2');
const promise3 = Promise.resolve('Value 3');

Promise.all([promise1, promise2, promise3])
  .then((values) => {
    console.log(values); // Output: ['Value 1', 'Value 2', 'Value 3']
    // All promises have resolved
    // Perform further operations with the resolved values
  })
  .catch((err) => {
    console.log(err); // Handle any errors that occurred during the promises
  });