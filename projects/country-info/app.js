const searchBtn = document.querySelector('#search-btn');
const countryInput = document.querySelector('#country-input');

searchBtn.addEventListener('click', ()=>{
    let countryName = countryInput.value;
    let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    console.log(finalURL);
    fetch(finalURL).then((response)=>{response.json()}
    ).then((data)=>{console.log(data)})
})