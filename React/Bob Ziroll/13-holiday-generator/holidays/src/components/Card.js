import React, { useState, useEffect } from 'react';

const Card = () => {
  const [countries, setCountries] = useState([]);
  const [randomCountry, setRandomCountry] = useState(null);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
        const countriesData = Object.values(data);
        setCountries(countriesData);
      })
      .catch(error => {
        console.log('Error:', error);
      });
  }, []);

  const handleRandomCountry = () => {
    const randomIndex = Math.floor(Math.random() * countries.length);
    const selectedCountry = countries[randomIndex];
    setRandomCountry(selectedCountry);
  };

  return (
    <div className="card">
      {randomCountry !==null && (
        <div>
          <h2>Randomly Selected Country</h2>
          <h3>Name: {randomCountry.name.common}</h3>
          <p>Capital: {randomCountry.capital}</p>
          {/* Render other desired country information */}
        </div>
      )}
      <button className="btn btn-primary" onClick={handleRandomCountry}>Get Random Country</button>
    </div>
  );
};

export default Card;
