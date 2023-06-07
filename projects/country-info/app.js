
function updateResultContainer(resultContainer, errorContainer, countryObj) {
    resultContainer.classList.remove('hidden');
    errorContainer.classList.add('hidden');

    const countryImage = resultContainer.querySelector('.country-image');
    const countryName = resultContainer.querySelector('.country-name');
    const factsContainer = resultContainer.querySelector('.facts-container');

    countryImage.src = countryObj.flags.svg;
    countryName.innerHTML = `<strong>${countryObj.name.common}</strong>`;
    factsContainer.innerHTML = `
        <p><strong>Capital City: </strong>${countryObj.capital}</p>
        <p><strong>Population: </strong>${countryObj.population.toLocaleString("en-US")}</p>
        <p><strong>Independent: </strong>${countryObj.independent ? 'Yes' : 'No'}</p>
    `;
}
  
function handleSearch() {
    const searchBtn = document.querySelector('#search-btn');
    const countryInput = document.querySelector('#country-input');
    const errorContainer = document.querySelector('.error-message');
    const resultContainer = document.querySelector('.result');
  
    resultContainer.classList.add('hidden');
    errorContainer.classList.add('hidden');
  
    const countryEntered = countryInput.value;
    const URL = `https://restcountries.com/v3.1/name/${countryEntered}`;
  
    fetch(URL)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Error fetching data');
        }
      })
      .then(data => {
        const countryObj = data[0];
        console.log(countryObj);
  
        updateResultContainer(resultContainer, errorContainer, countryObj);
      })
      .catch(err => {
        resultContainer.classList.add('hidden');
        errorContainer.textContent = 'Invalid country';
        errorContainer.classList.remove('hidden');
      });
}
  
document.addEventListener('DOMContentLoaded', () => {
    const searchBtn = document.querySelector('#search-btn');
    searchBtn.addEventListener('click', handleSearch);
});
  