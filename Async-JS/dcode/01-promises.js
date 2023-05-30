function divide(a, b) {
    return new Promise((resolve, reject) => {
        if (b==0) {
            reject(new Error(`Can't divide by zero`));
            return;
        }
        resolve(a/b);
    });
}

divide(50, 0).then(
    ()=>{
        console.log('Resolved!')
    }
).catch(()=>{
    console.log('Error!')
})
