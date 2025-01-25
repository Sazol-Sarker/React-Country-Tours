import { useState } from 'react';
import './Country.css'
const Country = ({country}) => {
    // all state hooks here 
    const [isVisited,setIsVisited]=useState(false);
    console.log(isVisited);

    const checkVisited=()=>{
        setIsVisited(!isVisited);
    }

    const {name,flags,population,area,cca3}=country;
    // console.log(name.common);
     console.log(country);
    return (
        <div className="country">
            <h4>Country Name: {name?.common}</h4>
        <img src={flags?.png} alt="Flag of country" />
        <p>Population: {population}</p>
        <p>Area: {area} sq. km</p>
        <p><b><small>Country Code: {cca3}</small></b></p>

        <button onClick={checkVisited}>{isVisited?'Visited':'Wanna Go'}</button>
        <br />
        {isVisited?'I have visited '+name?.common: 'I want to visit '+name?.common}
        {/* {isVisited?'I have visited'+{name?.common}: 'I want to visit'+{name?.common}} */}
        
        
        </div>
    );
};

export default Country;