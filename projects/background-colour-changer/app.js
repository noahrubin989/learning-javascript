function changeBg(element, color) {
    element.style.backgroundColor = color;
}

function changeHexDisplayed(spanTag, color) {
    spanTag.textContent = color;
}

function generateNewColor(hexCharacters) {
    let hexColorRep = "#";
    for (let index = 0; index < 6; index++) {
        const randomPosition = Math.floor(Math.random() * hexCharacters.length);
        hexColorRep += hexCharacters[randomPosition];
    }
    return hexColorRep;
}

// Main program
const hexChars = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
const body = document.querySelector('body');
const span = document.querySelector('.color');
const button = document.querySelector('#btn');

button.addEventListener('click', function() {
    const color = generateNewColor(hexChars);
    changeBg(body, color);
    changeHexDisplayed(span, color);
});