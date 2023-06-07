// Promise
const getSomething = () => {
    return new Promise((resolve, reject)=>{
        // fetch something
        resolve('some data');
        reject('some error');
    })
}

let myPromise = getSomething();

// myPromise.then(onfulfilled=(data)=>{
//     console.log(data);
// }, onrejected=(err)=>{
//     console.log(err);
// });

// ===== Another way =====
myPromise.then(onfulfilled=(data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})

// Run with the following command in terminal:
// Node dummy-example.js