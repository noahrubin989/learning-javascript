function getRandomColor() {
    // Generate a random RGB color value
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}

// Continuously change the background color every 5 seconds
setInterval(() => {
    const newColor = getRandomColor();
    document.body.style.backgroundColor = newColor;
}, 5000);