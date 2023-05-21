function handleClick(button) {
  button.textContent = 'CLICKED!';
  button.removeEventListener('click', handleClick);

  function resetText() {
    // The resetText function is responsible for resetting the text content of the button element to 'CLICK ME'.
    button.textContent = 'CLICK ME';

    /*
    The following code adds a click event listener to the button element. When the button is clicked, it executes 
    the handleClick function with the button element as an argument.
    */
    button.addEventListener('click', () => handleClick(button));
  }

  // Set timer so that after 1s it reverts back to the original text
  setTimeout(resetText, 1000);
}

// main
const btn = document.querySelector('#btn');
btn.addEventListener('click', () => handleClick(btn));
