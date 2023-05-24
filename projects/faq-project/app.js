const plusButtons = document.querySelectorAll('.plus-button');
const minusButtons = document.querySelectorAll('.minus-button');

// ====== Helper functions for learning purposes ======:
// Outstanding NodeList resource
// https://www.w3schools.com/jsref/dom_obj_html_nodelist.asp

function nodeListInfo(myNodeList) {
    console.log(`NodeList: ${plusButtons}`);
    console.log(`NodeList[0]: ${plusButtons[0]}`);
    console.log(`NodeList 1th index: ${plusButtons.item(1)}`);
    console.log(`NodeList length: ${plusButtons.length}`);
}

function nodeListEntries(myNodeList) {
    for (let entry of myNodeList.entries()) {
        console.log(entry);
        console.log(`Index: ${entry[0]}`);
        console.log(`Item: ${entry[1]}`);
    }
}

function nodeListKeys(myNodeList) {
    // Indices only
    for (let k of myNodeList.keys()) {
        console.log(k);
    }
}

// nodeListInfo(plusButtons);
// nodeListEntries(plusButtons);
// nodeListKeys(plusButtons);

// ====== App specific functions ======:

// Step 1: Get all question cards
// Get all question cards
const questionCards = document.querySelectorAll('.question');

// Add event listener to each question card
questionCards.forEach((card) => {
  const plusButton = card.querySelector('.plus-button');
  const minusButton = card.querySelector('.minus-button');
  const answer = card.querySelector('.question-answer');
  const underline = card.querySelector('.question-underline');

  // Set initial visibility
  plusButton.style.display = 'block';
  minusButton.style.display = 'none';
  answer.style.display = 'none';
  underline.style.display = 'none';

  // Add click event listener to toggle visibility
  plusButton.addEventListener('click', () => {
    answer.style.display = 'block';
    underline.style.display = 'block';
    plusButton.style.display = 'none';
    minusButton.style.display = 'block';
  });

  minusButton.addEventListener('click', () => {
    answer.style.display = 'none';
    underline.style.display = 'none';
    plusButton.style.display = 'block';
    minusButton.style.display = 'none';
  });
});

