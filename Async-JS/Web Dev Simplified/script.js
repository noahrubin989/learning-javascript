let p = new Promise((resolve, reject) => {
    let a = 1+1;
    if (a == 2) {
        resolve('Success');
    } else {
        reject('Failed');
    }
})

p.then(onfulfilled=(message)=>{
    console.log('This is in the then: ' + message);
}).catch(onrejected=(message)=>{
    console.log('This is in the catch: ' + message);
});