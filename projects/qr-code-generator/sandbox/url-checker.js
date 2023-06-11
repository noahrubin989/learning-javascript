const fetch = require('isomorphic-fetch');

// const isValidUrl = (string) => {
//     try {
//         new URL(string);
//         return true;
//     } catch (err) {
//         return false;
//     }
// } 

// console.log(isValidUrl('https://www.freecodecamp.org/')); // true
// console.log(isValidUrl('mailto://mail@freecodecamp.org')); // true
// console.log(isValidUrl('https://developer.mozilla.org/en-US/docs/Web/API/URL/URL')); // true
// console.log(isValidUrl('freecodecamp')); // false


const checkPageExists = (myURL) => {
    let myPromise = fetch(myURL);
    return myPromise
      .then(response => {
        if (response.ok) {
          return true; // Page exists
        } else {
          return false; // Page does not exist
        }
      })
      .catch(error => {
        console.error('Error:', error);
        return 'error'; // Indicates an error occurred
      });
  };
  
  // Usage example
  const url = 'https://developer.mozilla.org/en-US/docs/Web/API/Response/ok';
  checkPageExists(url)
    .then(result => {
      if (result === true) {
        console.log('Page exists');
      } else if (result === false) {
        console.log('Page does not exist');
      } else {
        console.log('An error occurred');
      }
    });
  
  
  
