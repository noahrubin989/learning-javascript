// npm install node-fetch
import fetch from "node-fetch";

let countryName = 'south africa'
let URL = `https://restcountries.com/v3.1/name/${countryName}`;


String.prototype.toProperCase = function () {
    // `this` is the string to be transformed
    return this.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase());
};

// Convert to title case for display purposes
countryName = countryName.toProperCase();

// fetch() sends a HTTP get request to the URL above and returns a promise that represents the asynchronous operation of fetching the data from the API.
let myPromise = fetch(URL);

myPromise.then(
    (responseObject) => {
        // Use the json() method to get the response data as JSON
        return responseObject.json();
    }
).then(
    // Promise resolved, hence the `data` that we are referring to here is the returned json data from a few lines up (where we used the .json method)
    (data) => {
        // console.log(data);
        let capital = data[0].capital[0];  // ['Berlin'] -> 'Berlin'
        let population = data[0].population;
        console.log(`${countryName} has ${population} people and the capital city is ${capital}`);
    }
).catch(
    // Promise rejected
    (errorObject) => {
        console.log('Promise Rejected', errorObject);
    }
);

