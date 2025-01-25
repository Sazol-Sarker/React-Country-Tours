import { useState } from 'react';
import './Country.css'
import CountryDetails from '../CountryDetails/CountryDetails';
const Country = ({country,visitedCountriesHandler,visitedCountriesFlagHandler}) => {
    // all state hooks here 
    const [isVisited,setIsVisited]=useState(false);
    // console.log('isVisited '+isVisited);

    const checkVisited=()=>{
        setIsVisited(!isVisited);
    }
    // console.log(visitedCountriesHandler);

    const {name,flags,population,area,cca3}=country;
    // console.log(name.common);
    //  console.log(country);
    return (
        // css ternary rendering using template string 
        <div className={`country ${isVisited?'visited-style':'not-visited-style'}`}>
            <h4>Country Name: {name?.common}</h4>
        <img src={flags?.png} alt="Flag of country" />
        <p>Population: {population}</p>
        <p>Area: {area} sq. km</p>
        <p><b><small>Country Code: {cca3}</small></b></p>
       
       {/* buttons */}
        <button onClick={()=>visitedCountriesHandler(country)}>Add to visited</button> <br />
        <button onClick={()=>visitedCountriesFlagHandler(country.flags.png)}>Add Flag</button> <br />
        <button onClick={checkVisited}>{isVisited?'Visited':'Wanna Go'}</button>
        <br />
        {isVisited?'I have visited '+name?.common: 'I want to visit '+name?.common}
        
        {/* Country details */}
        <hr />
        <CountryDetails key={country.cca3} 
        country={country}></CountryDetails>
        
        </div>
    );
};

export default Country;