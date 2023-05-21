const mydiv = document.querySelector('#box');        // parent
const mybutton = document.querySelector('#mybutton');  // child

// Add event listeners
mydiv.addEventListener(type='click', listener=function () {
    // `this` is referring to the mydiv itself
    this.style.backgroundColor="yellow";
});


// But let's actually stop this upward propegation when the click me button is pressed (no background change to outside div)
mybutton.addEventListener('click', function (e) {
    e.stopPropagation();
    console.log('Button was pressed! BUT IT DID NOT BUBBLE UPWARDS AND CHANGE THE BACKGROUND');
});

