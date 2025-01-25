import { useState } from "react";
import { useEffect } from "react";
import Country from "../Country/Country";
import './Countries.css'
const Countries = () => {
    // place for all states 
    const [countries,setCountries]=useState([])

    //api call
    const url='https://restcountries.com/v3.1/all';
    
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setCountries(data))
    },[])
    return (
        <div>
            <h3>Total Countries: {countries.length}</h3>
            <div className="country-container">

        {
            countries.map(country=><Country key={country.cca3} country={country}></Country>)
        }
        </div>
        
        </div>
    );
};

export default Countries;