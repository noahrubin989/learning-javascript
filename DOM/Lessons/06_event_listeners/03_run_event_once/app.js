const button = document.querySelector('.my-button');

button.addEventListener('click', function () {
    this.style.backgroundColor = 'lightgray';
    this.textContent = 'BOOKED!';
}, {once:true});

function bookButton() {
    button.classList.add('booked');
}