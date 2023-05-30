function save(inputId) {
    const val = document.getElementById(inputId);
    localStorage.setItem('myval', val.value);
    console.log(`Value {${val.value}} saved to local storage`);
}

function retrieve() {
    const val = localStorage.getItem('myval');
    if (val) {
        console.log(`Retrieved value {${val}}`);
    } else {
        console.log('No data found in local storage');
    }
}

function clear() {
    localStorage.removeItem("myval");
    console.log("Data cleared from local storage.");
}

const saveBtn = document.querySelector('.save');
const retrieveBtn = document.querySelector('.retrieve');
const clearBtn = document.querySelector('.clear');

saveBtn.addEventListener('click', () => save("input-field"));
retrieveBtn.addEventListener('click', () => retrieve());
clearBtn.addEventListener('click', () => clear());
