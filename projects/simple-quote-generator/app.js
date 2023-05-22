const quotes = [
    ['Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', 'Martin Fowler'],
    ['First, solve the problem. Then, write the code.', 'John Johnson'],
    ['Knowledge is power.', 'Francis Bacon'],
    ['Simplicity is the soul of efficiency.', 'Austin Freeman'],
    ["Code is like humor. When you have to explain it, it's bad.", "Cory House"],
    ["Make it work, make it right, make it fast.", "Kent Beck"],
    ["I'm not a great programmer; I'm just a good programmer with great habits.", "Kent Beck"]
];
  
function getRandomQuote() {
    const quoteIndex = Math.floor(Math.random() * quotes.length);
    return quotes[quoteIndex];
}

function displayQuote(quote) {
    const quoteTextElement = document.querySelector('.quote-text');
    const quoteAuthorElement = document.querySelector('.quote-author');

    const [quoteText, quoteAuthor] = quote;

    quoteTextElement.textContent = quoteText;
    quoteAuthorElement.textContent = quoteAuthor;
}

function showNewQuote() {
    const quote = getRandomQuote();
    displayQuote(quote);
}

const newQuoteButton = document.querySelector('.new-quote-button');
newQuoteButton.addEventListener('click', () => {
    newQuoteButton.disabled = true; // Disable the button until 250ms have passed
    showNewQuote();
    setTimeout(() => {
      newQuoteButton.disabled = false; // Enable the button after a delay
    }, 250); // Adjust the delay time (in milliseconds) as desired
});