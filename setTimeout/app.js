const btn = document.querySelector('.show-msg');
const cancelBtn = document.querySelector('.cancel-button');
let timeoutId;

function getData() {
    return {name: 'Noah', age: 21};
}

btn.addEventListener('click', () => {
    btn.disabled = true;
    cancelBtn.style.visibility = 'visible';

    timeoutId = setTimeout(() => {
        // All the below will happen after 2s
        let data = getData();
        console.log(data);
        resetApp();
        // console.log('App reset'); 
    }, 2000);
});

cancelBtn.addEventListener('click', () => {
    // console.log(timeoutId);
    clearTimeout(timeoutId);
    resetApp();
});

function resetApp() {
    btn.disabled = false;
    cancelBtn.style.visibility = 'hidden';
}
