import { useState } from "react";
import { useEffect } from "react";
import Country from "../Country/Country";
import "./Countries.css";
const Countries = () => {
  // place for all states
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedCountriesFlag,setVisitedCountriesFlag]=useState([])

  //api call
  const url = "https://restcountries.com/v3.1/all";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
//   console.log(object);

  //setVisitedCountries handler function
  const visitedCountriesHandler = (country) => {
    // console.log("IN Visited func");
    const newVisitedCountries=[...visitedCountries,country];
    setVisitedCountries(newVisitedCountries);
    // console.log(visitedCountries);
  };

//   handle for visitedCountriesFlag
const visitedCountriesFlagHandler=(flag)=>{
    // console.log('Set the flag');
    const newVisitedCountriesFlag=[...visitedCountriesFlag,flag];
    setVisitedCountriesFlag(newVisitedCountriesFlag);
};

//   console.log(visitedCountries.length);

  return (
    <div>
      <h3>Total Countries: {countries.length}</h3>
      {/* Visited country list */}
      <div className="visited-countries-container">
        <h4>Total Visited Countries: {visitedCountries.length}</h4>
        <ul>
        {
        visitedCountries.map(country=><li key={country.cca3}>{country.name.common}</li>)      
        }
        </ul>
      </div>
      {/* Visited country flags */}
      <div className="countries-flag-container">
        <h4>Total Flags: {visitedCountriesFlag.length}</h4>
        {
            visitedCountriesFlag.map((flag,index)=><img key={index} src={flag} alt="Flag of a country" />   )
        }
      </div>
      <div className="country-container">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            country={country}
            visitedCountriesHandler={visitedCountriesHandler}
            visitedCountriesFlagHandler={visitedCountriesFlagHandler}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
