const isValidUrl = (string) => {
    try {
        new URL(string);
        return true;
    } catch (err) {
        return false;
    }
};

const getValue = (userInput) => {
    return userInput.value;
}


const urlInput = document.querySelector('#urlInput');
const btnContainer = document.querySelector('#buttonContainer');
const qrContainer = document.querySelector('#qrCodeContainer');
const qrImage = document.querySelector('#qrImage')

urlInput.addEventListener('input', () => {
    let enteredURL = getValue(urlInput);
    if (isValidUrl(enteredURL)) {
        btnContainer.classList.remove('d-none');
    }
});

// Can't seem to get QR code image src

btnContainer.addEventListener('click', () => {
    // Make API call
    let enteredURL = getValue(urlInput);
    console.log(qrImage.src);
    let qrCodeImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${enteredURL}`;
    qrImage.src = qrCodeImageUrl;
    console.log(qrImage.src);
    qrContainer.classList.remove('d-none');
});



